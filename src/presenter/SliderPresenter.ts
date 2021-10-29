/* eslint-env jquery */
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import SliderView from '../view/SliderView';
import {
  PresenterBuildParams,
  CreateRangeSliderArgsType,
  DataForRunnerUpdatingArgsType,
} from './presenterInterfaces';

export default class SliderPresenter {
  id: string;

  // hasBar: boolean;

  // isRange: boolean;

  runnerCounter: number;

  field: FieldModel;

  runners: RunnerModel[];

  view: SliderView;

  constructor(id: string, params?: PresenterBuildParams) {
    // this.id = id;
    // this.isRange = false;
    this.runnerCounter = 0;
    this.field = new FieldModel(id, this);
    this.runners = [];
    this.view = new SliderView(id, this);
    this.build(params);
  }

  // build(params: PresenterBuildParams) {
  // prettier-ignore
  build(params: PresenterBuildParams):void {
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

    this.setMinMax(minValue, maxValue)
      .initLayers(runnerSize)
      .createRangeSlider({
        isRange, shouldAddTip, runnerSize, minValue, maxValue,
      })
      .setStep(step)
      .createBar(shouldAddBar)
      .updateTipNumber(minValue, 0)
      .updateTipNumber(maxValue, 1)
      .onClick();
  }

  initLayers(runnerSize: number[]): this {
    this.view.initializeValues(runnerSize, this.view.fieldSize, this.field.isVertical);
    // this.setMaxValue();
    return this;
  }

  //  prettier-ignore
  createRangeSlider({
    isRange, shouldAddTip, runnerSize, minValue, maxValue,
  }:CreateRangeSliderArgsType): this {
    this.createRunnerView(this.runnerCounter);
    this.createRunner(runnerSize, minValue, maxValue);
    this.createTipNumber(shouldAddTip);
    this.onDrag(this.runnerCounter);
    this.onDrop();

    if (isRange) {
      this.runnerCounter += 1;
      this.view.isRange = true;
      this.field.isRange = true;
      this.createRunnerView(this.runnerCounter);
      this.createRunner(runnerSize, minValue, maxValue);
      this.createTipNumber(shouldAddTip);
      this.onDrag(this.runnerCounter);
      this.onDrop();
    } else this.view.isRange = false;
    return this;
  }

  createRunner(runnerSize: number[], minValue: number, maxValue: number): this {
    this.runners.push(
      new RunnerModel(this.id, this.runnerCounter, this, runnerSize, this.view.$field),
    );
    this.runners[this.runnerCounter].initializeDefaultValues([minValue, maxValue]);
    return this;
  }

  // correctRunnerPosition() {
  //   this.view.correctRunnerPosition(this.id);
  //   return this;
  // }

  createRunnerView(i: number): this {
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
      this.view.hasBar = true;
      this.view.createBar(this);
      this.view.updateBarPosition(this.runners[0]);
    }

    return this;
  }

  // todo NEARES OF TWO RANGES
  onClick(): this {
    this.view.activateOnClickListener(this.runners, this.field);
    // this.recieve(this); // ? is it needed? or it call from onDrag notify?
    return this;
  }

  onDrag(runnerCounter: number): this {
    // [this.runner[0].stepPosition]

    $(document).ready(() => {
      this.view.activateOnDragListener(runnerCounter);
    });
    return this;
  }

  onDrop(): this {
    this.view.activateOnDropListener();
    return this;
  }

  recieveModelLogic(activeRunner: RunnerModel): void {
    if (activeRunner) {
      this.updateRunnerPosition(activeRunner);
      this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);
      if (this.view.hasBar) this.updateBarPosition(activeRunner);
    }
  }

  recieveDragData(
    { runnersPosition, isVertical, minMax, isRange, fieldSize }: SliderView,
    cursorXY: number[],
    i: number,
  ): void {
    this.runners[i].updateRunnerValues(cursorXY, this.runners, this.runners[i]);
  }

  recieveClickData(
    { runnersPosition, isVertical, minMax, isRange, fieldSize }: SliderView,
    cursorXY: number[],
  ): void {
    const dataForRunnerUpdatingArgs: DataForRunnerUpdatingArgsType = {
      runnersPosition,
      isVertical,
      minMax,
      isRange,
      fieldSize,
      cursorXY,
      runners: this.runners,
    };
    this.field.prepareDataForRunnerUpdating(dataForRunnerUpdatingArgs);
  }

  updateRunnerPosition(activeRunner: RunnerModel): void {
    this.view.updateRunnerPosition(activeRunner);
  }

  updateTipNumber(stepValue: number, instance: number): this {
    this.view.updateTipNumber({ stepValue, instance });
    return this;
  }

  updateBarPosition(activeRunner: RunnerModel): this {
    this.view.updateBarPosition(this.view.isRange, activeRunner);
    return this;
  }

  // how to test? read css data-start/end, read this.field.min/max and compare
  setMinMax(minValue: number, maxValue: number): this {
    const setFieldMinMaxArgs = [
      ['minValue', minValue],
      ['maxValue', maxValue],
    ];
    setFieldMinMaxArgs.forEach((v) => this.field.setMinMax(v));
    this.view.initStartEnd(minValue, maxValue);
    return this;
  }

  setStep(step: number): this {
    this.runners.forEach((v) => v.setStep(step));
    if (step < 1) this.runners.forEach((v) => v.defineSignAfterComma(step));

    return this;
  }
}
