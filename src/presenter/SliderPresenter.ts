/* eslint-env jquery */
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import SliderView from '../view/SliderView';
import ControllerBuildParams from './presenterInterfaces';

type CreateRangeRunnerArgsType = {
  isRange: boolean;
  shouldAddTip: boolean;
  runnerSize: number[];
  minValue: number;
  maxValue: number;
};

export default class SliderController {
  id: string;

  hasBar: boolean;

  isRange: boolean;

  runnerCounter: number;

  field: FieldModel;

  runner: Array<RunnerModel>;

  view: SliderView;

  constructor(id: string, params?: ControllerBuildParams) {
    this.id = id;
    this.hasBar = false;
    this.isRange = false;
    this.runnerCounter = 0;
    this.field = new FieldModel(this.id, this);
    this.runner = [];
    this.view = new SliderView(this.id);
    this.build(params);
  }

  // build(params: ControllerBuildParams) {
  // prettier-ignore
  build(params: ControllerBuildParams):void {
    let {
      minValue = 0,
      maxValue = 100,
      step = 1,
    } = params;

    const {
      shouldAddTip = false, shouldAddBar = false, isRange = false, runnerSize = [40, 40],
    } = params;

    const checkedValues = () => {
      if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
      } else if (minValue === maxValue) {
        minValue = 0;
        maxValue = 100;
      }

      if (step <= 0) {
        step = 1;
      }
      if (runnerSize[0] <= 0 || runnerSize[1] <= 0) {
        runnerSize[0] = 40;
        runnerSize[1] = 40;
      }
    };
    checkedValues();

    this.setMinValue(minValue)
      .setMaxValue(maxValue)
      .initLayers(runnerSize)
      .createRangeRunner({
        isRange, shouldAddTip, runnerSize, minValue, maxValue,
      })
      // .correctRunnerPosition()
      .setStep(step)
      .createBar(shouldAddBar)
      .updateTipNumber(minValue, 0)
      .updateTipNumber(maxValue, 1)
      .onDrag()
      .onDrop()
      .onClick();
  }

  initLayers(runnerSize: number[]): this {
    this.field.initValues(this.field);
    this.view.initializeValues(runnerSize, this.field.size, this.field.isVertical);
    // this.setMaxValue();
    return this;
  }

  //  prettier-ignore
  createRangeRunner({
    isRange, shouldAddTip, runnerSize, minValue, maxValue,
  }:CreateRangeRunnerArgsType): this {
    this.createSliderView(this.runnerCounter);
    this.createRunner(runnerSize, minValue, maxValue);
    this.createTipNumber(shouldAddTip);

    if (isRange) {
      this.runnerCounter += 1;
      this.isRange = true;
      this.field.isRange = true;
      this.createSliderView(this.runnerCounter);
      this.createRunner(runnerSize, minValue, maxValue);

      this.createTipNumber(shouldAddTip);
    } else this.isRange = false;
    return this;
  }

  createRunner(runnerSize: number[], minValue: number, maxValue: number): this {
    this.runner.push(
      new RunnerModel(this.id, this.runnerCounter, this, runnerSize, this.field.$element),
    );
    this.runner[this.runnerCounter].initializeDefaultValues([minValue, maxValue]);
    return this;
  }

  // correctRunnerPosition() {
  //   this.view.correctRunnerPosition(this.id);
  //   return this;
  // }

  createSliderView(i: number): this {
    this.view.createRunner(i, this.field.isVertical);
    return this;
  }

  // createTipNumber(isOn: boolean) {
  createTipNumber(isOn: boolean): this {
    if (isOn) {
      this.view.createTipNumber(
        this.runnerCounter,
        this.field.isVertical,
        // [this.field.minValue, this.field.maxValue],
        // this.runner[0].step,
      );
    }
    return this;
  }

  createBar(shouldAddBar: boolean): this {
    if (shouldAddBar) {
      this.hasBar = true;
      this.view.createBar(this);
      this.view.updateBarPosition(this.isRange, this.runner[0]);
    }

    return this;
  }

  // todo NEARES OF TWO RANGES
  onClick(): this {
    this.field.onClick(this.runner, this.isRange);
    // this.recieve(this); // ? is it needed? or it call from onDrag notify?
    return this;
  }

  onDrag(): this {
    // [this.runner[0].stepPosition]

    $(document).ready(() => {
      // this.recieve(this.runner.forEach((v) => v.onDrag(this.runner, this.isRange, this.field)));
      this.view.forEach((v) => v.onDrag(this.runner, this.isRange, this.field));
    });
    return this;
  }

  onDrop(): this {
    this.runner.forEach((v) => v.onDrop(this.field.$element));
    return this;
  }

  recieve(activeRunner: RunnerModel): void {
    if (activeRunner) {
      this.updateRunnerPosition(activeRunner);
      this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);
      if (this.hasBar) this.updateBarPosition(activeRunner);
    }
  }

  updateRunnerPosition(activeRunner: RunnerModel): void {
    this.view.updateRunnerPosition(activeRunner);
  }

  updateTipNumber(stepValue: number, instance: number): this {
    this.view.updateTipNumber({ stepValue, instance });
    return this;
  }

  updateBarPosition(activeRunner: RunnerModel): this {
    this.view.updateBarPosition(this.isRange, activeRunner);
    return this;
  }

  // how to test? read css data-start/end, read this.field.min/max and compare
  setMaxValue(maxValue: number): this {
    this.field.setMinMax(['maxValue', maxValue]);
    return this;
  }

  setMinValue(minValue: number): this {
    this.field.setMinMax(['minValue', minValue]);
    return this;
  }

  setStep(step: number): this {
    this.runner.forEach((v) => v.setStep(step));
    if (step < 1) this.runner.forEach((v) => v.defineSignAfterComma(step));

    return this;
  }
}
