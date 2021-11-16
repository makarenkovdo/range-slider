/* eslint-env jquery */
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import { CalculateStepPositionFromInputReturned, UpdateRunnerValuesArgs } from '../model/runnerModules/runnerInterfaces';
import setValuesFromInputs from '../model/runnerModules/setValuesFromInputs';
import { calculatePositionInPercent, calculateStepValueAndPosition, setStepValueAndPosition } from '../model/runnerModules/updateRunnerValues/updateRunnerValuesUtility';
import SliderView from '../view/SliderView';
import {
  PresenterBuildParams,
  DataForRunnerUpdatingArgsType,
} from './presenterInterfaces';
import checkValues from './presenterModules/checkValues';

class SliderPresenter {
  public field: FieldModel;

  public runners: RunnerModel[];

  public view: SliderView;

  private id: string;

  private runnerCounter: number;

  constructor(id: string, params?: PresenterBuildParams) {
    this.runnerCounter = 0;
    this.runners = [];
    this.field = new FieldModel(id, this);
    this.view = new SliderView(id, this);
    this.build(params);
    this.addListeners(params);
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

    // let cursorXY = [50,50]
    // this.runners[0].updateRunnerValues({
    //   cursorXY,
    //   isVertical: this.field.isVertical,
    //   minMax: this.field.minMax,
    //   isRange: this.field.isRange,
    //   fieldSize: this.view.fieldSize,
    //   runners: this.runners,
    //   activeRunner: this.runners[0],
    // });
    // cursorXY = [checkedParams.runnersInstantPosition[1], checkedParams.runnersInstantPosition[0]];
    // this.runners[1].updateRunnerValues({
    //   cursorXY,
    //   isVertical: this.field.isVertical,
    //   minMax: this.field.minMax,
    //   isRange: this.field.isRange,
    //   fieldSize: this.view.fieldSize,
    //   runners: this.runners,
    //   activeRunner: this.runners[1],
    // });
  }
  // prettier-ignore

  private activatePanel(params: PresenterBuildParams): this {
    // if (params.hasInputPanel && !this.view.hasPanel) {
    this.view.panel.activatePanel.call(this.view, params);
    this.view.hasPanel = true;
    // }
    return this;
  }

  private addListeners({ isRange }:PresenterBuildParams): this {
    this.onClick().onDrag(0).onDrop();
    if (isRange) this.onDrag(1);
    return this;
  }

  //  prettier-ignore
  public createRangeSlider({
    isRange, shouldAddTip, runnerSize, minValue, maxValue, runnersInstantPosition, step,
  }:PresenterBuildParams): this {
    this.createRunner(runnerSize, minValue, maxValue, runnersInstantPosition[this.runnerCounter], step);
    let { stepPosition, stepValue } = this.runners[this.runnerCounter];

    this.createRunnerView(this.runnerCounter, stepPosition);
    this.createTipNumber(shouldAddTip, stepPosition, stepValue);

    if (isRange) {
      this.runnerCounter += 1;
      this.view.isRange = true;
      this.field.isRange = true;
      this.createRunner(runnerSize, minValue, maxValue, runnersInstantPosition[this.runnerCounter], step);
      ({ stepPosition, stepValue } = this.runners[this.runnerCounter]);
      this.createRunnerView(this.runnerCounter, stepPosition);
      this.createTipNumber(shouldAddTip, stepPosition, stepValue);
      // this.onDrag(this.runnerCounter);
      // this.onDrop();
    } else this.view.isRange = false;
    return this;
  }

  public createRunner(
    runnerSize: number[],
    minValue: number,
    maxValue: number,
    runnersInstantPosition: number,
    step,
  ): this {
    this.runners.push(new RunnerModel(this.id, this.runnerCounter, this));
    this.runners[this.runnerCounter].setStep(step, [minValue, maxValue])
    this.runners[this.runnerCounter].initializeDefaultValues(
      [minValue, maxValue],
      runnersInstantPosition,
    );
    return this;
  }

  public createRunnerView(i: number, stepPosition: number): this {
    this.view.runner.createRunner(i, stepPosition);
    return this;
  }

  public createTipNumber(isOn: boolean, stepPosition: number, stepValue:number): this {
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

  public createBar({ shouldAddBar }:PresenterBuildParams): this {
    if (shouldAddBar) {
      this.view.hasBar = true;
      this.view.bar.createBar(this);
      this.view.bar.updateBarPosition();
    }

    return this;
  }

  public createScale({ shouldAddScale }:PresenterBuildParams): this {
    if (shouldAddScale) {
      this.view.hasScale = true;
      this.view.scale.create();
    }

    return this;
  }

  public onDrag(runnerCounter: number): this {
    $(document).ready(() => {
      this.view.runner.handleDrag(runnerCounter);
    });
    return this;
  }

  public onDrop(): this {
    this.view.runner.handleDrop();
    return this;
  }

  // public onInputChange():this {
  //   this.view.panel.handleInputsChange();
  //   return this;
  // }

  public rebuild(params:PresenterBuildParams):void {
    this.view.panel.clearHTMLElement(this.view.id);
    this.runnerCounter = 0;
    this.build(params);
    // this.view.panel.initializePanel(params);
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

  // prettier-ignore
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

  // prettier-ignore
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

  public setStep({ step }:PresenterBuildParams): this {
    this.runners.forEach((v) => v.setStep(step, this.field.minMax));
    if (step < 1) this.runners.forEach((v) => v.defineSignAfterComma());
    this.view.setStep(step, this.runners[0].stepSignAfterComma);

    return this;
  }

  private updateRunnerPosition({ stepPosition, instance }: RunnerModel): void {
    this.view.runner.updatePosition(stepPosition, instance);
  }

  public updateTipNumber(stepValue: number, instance: number): this {
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
