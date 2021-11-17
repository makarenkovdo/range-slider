/* eslint-env jquery */
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import { UpdateRunnerValuesArgs } from '../model/runnerModules/runnerInterfaces';
import SliderView from '../view/SliderView';
import {
  PresenterBuildParams,
  DataForRunnerUpdatingArgsType,
} from './presenterInterfaces';
import checkValues from './presenterModules/checkValues';

class SliderPresenter {
  private field: FieldModel;

  private runners: RunnerModel[];

  private view: SliderView;

  private isBothOnDragAdded: boolean;

  private id: string;

  private runnerCounter: number;

  constructor(id: string, params?: PresenterBuildParams) {
    this.runnerCounter = 0;
    this.runners = [];
    this.isBothOnDragAdded = false;
    this.field = new FieldModel(id, this);
    this.view = new SliderView(id, this);
    this.build(params);
    this.addListeners(params, 'build');
  }

  private build(params: PresenterBuildParams): void {
    const checkedParams = checkValues(params);
    if (!checkedParams.isTestMode) {
      this.setMinMax(checkedParams)
        .initLayers(checkedParams)
        .createRangeSlider(checkedParams)
        .setStep(checkedParams)
        .createBar(checkedParams)
        .createScale(checkedParams)
        .activatePanel(checkedParams);
    }
  }

  private activatePanel(params: PresenterBuildParams): this {
    this.view.panel.activatePanel.call(this.view, params);
    this.view.hasPanel = true;
    return this;
  }

  private addListeners({ isRange }:PresenterBuildParams, actionType:string): this {
    switch (actionType) {
      case 'build': {
        this.onClick().onDrag(0).onDrop();
        if (isRange) {
          this.onDrag(1);
        }
        break;
      }
      case 'rebuild': {
        this.onDrag(0);
        if (isRange) {
          this.onDrag(1);
        }
        break;
      }

      default: break;
    }

    return this;
  }

  private removeListeners({ isRange }:PresenterBuildParams): this {
    this.view.runner.removeDrag(0);
    if (isRange) this.view.runner.removeDrag(1);

    return this;
  }

  private createRangeSlider({
    isRange, shouldAddTip, runnerSize, minValue, maxValue, runnersInstantPosition, step,
  }:PresenterBuildParams): this {
    this.createRunner(
      runnerSize,
      minValue,
      maxValue,
      runnersInstantPosition[this.runnerCounter],
      step,
    );
    let { stepPosition, stepValue } = this.runners[this.runnerCounter];
    const stepSignAfterComma = this.runners[0].defineSignAfterComma([minValue, maxValue]);
    this.createRunnerView(this.runnerCounter, stepPosition, stepSignAfterComma);
    this.createTipNumber(shouldAddTip, stepPosition, stepValue);

    if (isRange) {
      this.runnerCounter += 1;
      this.view.isRange = true;
      this.field.isRange = true;
      this.createRunner(runnerSize,
        minValue,
        maxValue,
        runnersInstantPosition[this.runnerCounter],
        step);
      ({ stepPosition, stepValue } = this.runners[this.runnerCounter]);
      this.runners[this.runnerCounter].stepSignAfterComma = stepSignAfterComma;
      this.createRunnerView(this.runnerCounter, stepPosition, stepSignAfterComma);
      this.createTipNumber(shouldAddTip, stepPosition, stepValue);
    } else this.view.isRange = false;
    return this;
  }

  private createRunner(
    runnerSize: number[],
    minValue: number,
    maxValue: number,
    runnersInstantPosition: number,
    step: number,
  ): this {
    this.runners.push(new RunnerModel(this.id, this.runnerCounter, this));
    this.runners[this.runnerCounter].setStep(step, [minValue, maxValue]);
    this.runners[this.runnerCounter].initializeDefaultValues(
      [minValue, maxValue],
      runnersInstantPosition,
    );
    return this;
  }

  private createRunnerView(i: number, stepPosition: number, stepSignAfterComma: number): this {
    this.view.runner.createRunner(i, stepPosition, stepSignAfterComma);
    return this;
  }

  private createTipNumber(isOn: boolean, stepPosition: number, stepValue:number): this {
    if (isOn) {
      this.view.tip.create(
        this.runnerCounter,
        this.field.isVertical,
        stepPosition,
        stepValue,
      );
    }
    return this;
  }

  private createBar({ shouldAddBar, fieldThickness }:PresenterBuildParams): this {
    if (shouldAddBar) {
      this.view.hasBar = true;
      this.view.bar.createBar(fieldThickness);
      this.view.bar.updateBarPosition();
    }

    return this;
  }

  private createScale({ shouldAddScale }:PresenterBuildParams): this {
    if (shouldAddScale) {
      this.view.hasScale = true;
      this.view.scale.create();
    }

    return this;
  }

  private onDrag(runnerCounter: number): this {
    $(document).ready(() => {
      this.view.runner.handleDrag(runnerCounter);
    });
    return this;
  }

  private onDrop(): this {
    this.view.runner.handleDrop();
    return this;
  }

  private rebuild(params:PresenterBuildParams):void {
    this.field.isRange = false;
    this.view.isRange = false;
    this.removeListeners(params);
    this.runners = [];
    this.view.panel.clearHTMLElement(this.view.id);
    this.runnerCounter = 0;
    this.build(params);
    this.addListeners(params, 'rebuild');
  }

  public recieveModelLogic(activeRunner: RunnerModel): void {
    if (activeRunner) {
      this.updateRunnerPosition(activeRunner);
      if (this.view.hasTip) this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);
      if (this.view.hasBar) this.updateBarPosition();
      if (this.view.hasPanel) {
        this.view.panel.updateRunnerInput(
          activeRunner.stepValue,
          activeRunner.instance,
        );
      }
    }
  }

  public recieveRebuildData(params: PresenterBuildParams): void {
    this.rebuild(params);
  }

  public recieveDragData(
    { fieldSize }: SliderView,
    cursorXY: number[],
    i: number,
  ): void {
    const dataForRunnerUpdatingArgs: UpdateRunnerValuesArgs = {
      cursorXY,
      isVertical: this.field.isVertical,
      minMax: this.field.minMax,
      isRange: this.field.isRange,
      fieldSize,
      runners: this.runners,
      activeRunner: this.runners[i],
    };
    this.runners[i].updateRunnerValues(dataForRunnerUpdatingArgs);
  }

  public recieveInputsData(
    panelInputsData: PresenterBuildParams,
  ): void {
    this.rebuild(panelInputsData);
  }

  public recieveClickData(
    view: SliderView,
    cursorXY: number[],
  ): void {
    const runnersPosition = view.runner.positions;
    const { fieldSize } = view;
    const dataForRunnerUpdatingArgs: DataForRunnerUpdatingArgsType = {
      runnersPosition,
      isVertical: this.field.isVertical,
      minMax: this.field.minMax,
      isRange: this.field.isRange,
      fieldSize,
      cursorXY,
      runners: this.runners,
    };
    this.field.prepareDataForRunnerUpdating(dataForRunnerUpdatingArgs);
  }

  private setMinMax({ minValue, maxValue }:PresenterBuildParams): this {
    this.field.setMinMax(minValue, maxValue);
    this.view.initStartEnd(minValue, maxValue);
    return this;
  }

  private setStep({ step }:PresenterBuildParams): this {
    this.runners.forEach((v) => v.setStep(step, this.field.minMax));
    this.view.setStep(step, this.runners[0].stepSignAfterComma);

    return this;
  }

  private updateRunnerPosition({ stepPosition, instance }: RunnerModel): void {
    this.view.runner.updatePosition(stepPosition, instance);
  }

  private updateTipNumber(stepValue: number, instance: number): this {
    this.view.tip.update({ stepValue, instance });
    return this;
  }

  private updateBarPosition(): this {
    this.view.bar.updateBarPosition();
    return this;
  }

  private initLayers({ runnerSize, fieldThickness, orientation }:PresenterBuildParams): this {
    this.field.setIsVertical(orientation);
    this.view.initializeValues(runnerSize, fieldThickness, orientation);

    return this;
  }

  private onClick(): this {
    this.view.handleClick(this.runners, this.field);
    return this;
  }
}

export default SliderPresenter;
