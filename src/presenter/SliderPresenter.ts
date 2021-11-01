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
import checkValues from './presenterModules/checkValues';

export default class SliderPresenter {
  public field: FieldModel;

  public runners: RunnerModel[];

  public view: SliderView;

  private id: string;

  private runnerCounter: number;

  constructor(id: string, params?: PresenterBuildParams) {
    this.runnerCounter = 0;
    this.field = new FieldModel(id, this);
    this.runners = [];
    this.view = new SliderView(id, this);
    this.build(params);
  }

  // prettier-ignore

  //  prettier-ignore
  public createRangeSlider({
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

  public createRunner(runnerSize: number[], minValue: number, maxValue: number): this {
    this.runners.push(new RunnerModel(this.id, this.runnerCounter, this));
    this.runners[this.runnerCounter].initializeDefaultValues([minValue, maxValue]);
    return this;
  }

  public createRunnerView(i: number): this {
    this.view.createRunner(i, this.field.isVertical);
    return this;
  }

  public createTipNumber(isOn: boolean): this {
    if (isOn) {
      this.view.createTipNumber(this.runnerCounter, this.field.isVertical);
    }
    return this;
  }

  public createBar(shouldAddBar: boolean): this {
    if (shouldAddBar) {
      this.view.hasBar = true;
      this.view.createBar(this);
      this.view.updateBarPosition(this.runners[0]);
    }

    return this;
  }

  public onDrag(runnerCounter: number): this {
    $(document).ready(() => {
      this.view.activateOnDragListener(runnerCounter);
    });
    return this;
  }

  public onDrop(): this {
    this.view.activateOnDropListener();
    return this;
  }

  public recieveModelLogic(activeRunner: RunnerModel): void {
    if (activeRunner) {
      this.updateRunnerPosition(activeRunner);
      this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);
      if (this.view.hasBar) this.updateBarPosition(activeRunner);
    }
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

  // prettier-ignore
  public recieveClickData(
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

  public setMinMax(minValue: number, maxValue: number): this {
    this.field.setMinMax(minValue, maxValue);
    this.view.initStartEnd(minValue, maxValue);
    return this;
  }

  public setStep(step: number): this {
    this.runners.forEach((v) => v.setStep(step));
    if (step < 1) this.runners.forEach((v) => v.defineSignAfterComma());

    return this;
  }

  public updateTipNumber(stepValue: number, instance: number): this {
    this.view.updateTipNumber({ stepValue, instance });
    return this;
  }

  // public updateZIndex(instance: number): this {
  //   this.view.updateZIndex(instance);
  //   return this;
  // }

  //  prettier-ignore
  private build(params: PresenterBuildParams): void {
    let {
      minValue = 0, maxValue = 100, step = 1, runnerSize = [40, 40],
    } = params;

    const {
      shouldAddTip = false,
      shouldAddBar = false,
      isRange = false,
      isTestMode = false,
    } = params;

    //  prettier-ignore
    ({
      minValue, maxValue, step, runnerSize,
    } = checkValues(
      {
        minValue, maxValue, step, runnerSize,
      },
    ));

    if (!isTestMode) {
      this.setMinMax(minValue, maxValue)
        .initLayers(runnerSize)
        .createRangeSlider({
          isRange,
          shouldAddTip,
          runnerSize,
          minValue,
          maxValue,
        })
        .setStep(step)
        .createBar(shouldAddBar)
        .updateTipNumber(minValue, 0)
        .updateTipNumber(maxValue, 1)
        .onClick();
    }
  }

  private updateBarPosition(activeRunner: RunnerModel): this {
    this.view.updateBarPosition(activeRunner);
    return this;
  }

  private initLayers(runnerSize: number[]): this {
    this.view.initializeValues(runnerSize);
    return this;
  }

  private onClick(): this {
    this.view.activateOnClickListener(this.runners, this.field);
    return this;
  }

  private updateRunnerPosition({ stepPosition, instance }: RunnerModel): void {
    this.view.updateRunnerPosition(stepPosition, instance);
  }
}
