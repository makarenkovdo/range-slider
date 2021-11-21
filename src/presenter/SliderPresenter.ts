/* eslint-env jquery */
import { BuildParams } from '../initializeTypes';
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import { UpdateRunnerValuesArgs } from '../model/runnerModules/runnerInterfaces';
import Slider from '../Slider';
import SliderView from '../view/SliderView';
import { DataForRunnerUpdatingArgsType } from './presenterInterfaces';

class SliderPresenter {
  public parent: Slider;

  public params: BuildParams;

  private field: FieldModel;

  private runners: RunnerModel[];

  private view: SliderView;

  private id: string;

  private runnerCounter: number;

  constructor(
    slider: Slider,
    id: string,
    params: BuildParams,
  ) {
    this.parent = slider;
    this.id = id;
    this.runnerCounter = 0;
    this.runners = [];
    this.field = new FieldModel(id, this);
    this.view = new SliderView(id, this);
    this.params = params;
    this.build(params);
    this.addListeners(params, 'build');
  }

  public rebuild(params:BuildParams):void {
    this.params = params;
    this.field.isRange = false;
    this.view.isRange = false;
    this.removeListeners(params);
    this.runners = [];
    this.view.clearHTMLElement(this.view.id, params.orientation);
    this.runnerCounter = 0;
    this.build(params);
    this.addListeners(params, 'rebuild');
  }

  private build(params: BuildParams): void {
    console.log('build params', params);
    
    if (!params.isTestMode) {
      this.setMinMax(params)
        .initLayers(params)
        .createRangeSlider(params)
        .setStep(params)
        .createBar(params)
        .createScale(params);
    }
  }

  private addListeners({ isRange }:BuildParams, actionType:string): this {
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

  private createRangeSlider({
    isRange, shouldAddTip, runnerSize, minValue, maxValue, runnersInstantPosition, step,
  }:BuildParams): this {
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

  private createBar({ shouldAddBar, fieldThickness }:BuildParams): this {
    if (shouldAddBar) {
      this.view.hasBar = true;
      this.view.bar.createBar(fieldThickness);
      this.view.bar.updateBarPosition();
    }

    return this;
  }

  private createScale({ shouldAddScale }:BuildParams): this {
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

  private removeListeners({ isRange }:BuildParams): this {
    this.view.runner.removeDrag(0);
    if (isRange) this.view.runner.removeDrag(1);

    return this;
  }

  public recieveModelLogic(activeRunner: RunnerModel): void {
    if (activeRunner) {
      this.updateRunnerPosition(activeRunner);
      if (this.view.hasTip) this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);
      if (this.view.hasBar) this.updateBarPosition();
      if (this.params.onChange) {
        this.params.runnersInstantPosition[activeRunner.instance] = activeRunner.stepValue;
        this.params.onChange(this.params);
      }
    }
  }

  public recieveRebuildData(params: BuildParams): void {
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

  // public recieveInputsData(
  //   panelInputsData: BuildParams,
  // ): void {
  //   this.rebuild(panelInputsData);
  // }

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

  private setMinMax({ minValue, maxValue }:BuildParams): this {
    this.field.setMinMax(minValue, maxValue);
    this.view.initStartEnd(minValue, maxValue);
    return this;
  }

  private setStep({ step }:BuildParams): this {
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

  private initLayers({ runnerSize, fieldThickness, orientation }:BuildParams): this {
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
