/* eslint-env jquery */
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import { UpdateRunnerValuesArgs } from '../model/runnerModules/runnerInterfaces';
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
      isTestMode = false,
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

    if (!isTestMode) {
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
    this.runners.push(new RunnerModel(this.id, this.runnerCounter, this));
    this.runners[this.runnerCounter].initializeDefaultValues([minValue, maxValue]);
    return this;
  }

  createRunnerView(i: number): this {
    this.view.createRunner(i, this.field.isVertical);
    return this;
  }

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

  initLayers(runnerSize: number[]): this {
    this.view.initializeValues(runnerSize, this.view.fieldSize, this.field.isVertical);
    return this;
  }

  onClick(): this {
    this.view.activateOnClickListener(this.runners, this.field);
    return this;
  }

  onDrag(runnerCounter: number): this {
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

  // prettier-ignore
  recieveDragData(
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

  // prettier-ignore
  recieveClickData(
    {
      runnersPosition, fieldSize,
    }: SliderView,
    cursorXY: number[],
  ): void {
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

  setMinMax(minValue: number, maxValue: number): this {
    this.field.setMinMax(minValue, maxValue);
    this.view.initStartEnd(minValue, maxValue);
    return this;
  }

  setStep(step: number): this {
    this.runners.forEach((v) => v.setStep(step));
    if (step < 1) this.runners.forEach((v) => v.defineSignAfterComma(step));

    return this;
  }

  updateRunnerPosition({ stepPosition, instance }: RunnerModel): void {
    this.view.updateRunnerPosition(stepPosition, instance);
  }

  updateTipNumber(stepValue: number, instance: number): this {
    this.view.updateTipNumber({ stepValue, instance });
    return this;
  }

  updateBarPosition(activeRunner: RunnerModel): this {
    this.view.updateBarPosition(activeRunner);
    return this;
  }
}
