/* eslint-env jquery */
import FieldModel from '../model/FieldModel';
import RunnerModel from '../model/RunnerModel';
import { UpdateRunnerValuesArgs } from '../model/runnerModules/runnerInterfaces';
import SliderView from '../view/SliderView';
import { PanelInputsData, RunnersInstantPosition } from '../view/viewInterfaces';
import {
  PresenterBuildParams,
  CreateRangeSliderArgsType,
  DataForRunnerUpdatingArgsType,
  Orientation,
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
    this.addListeners(params.isRange);
  }

  // prettier-ignore

  //  prettier-ignore
  public createRangeSlider({
    isRange, shouldAddTip, runnerSize, minValue, maxValue, runnersInstantPosition,
  }:CreateRangeSliderArgsType): this {
    this.createRunner(runnerSize, minValue, maxValue, runnersInstantPosition[this.runnerCounter]);
    let { stepValue, stepPosition } = this.runners[this.runnerCounter];

    this.createRunnerView(this.runnerCounter, stepPosition);
    this.createTipNumber(shouldAddTip, stepPosition, stepValue);

    if (isRange) {
      this.runnerCounter += 1;
      this.view.isRange = true;
      this.field.isRange = true;
      this.createRunner(runnerSize, minValue, maxValue, runnersInstantPosition[this.runnerCounter]);
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
  ): this {
    this.runners.push(new RunnerModel(this.id, this.runnerCounter, this));
    this.runners[this.runnerCounter].initializeDefaultValues(
      [minValue, maxValue],
      runnersInstantPosition,
    );
    return this;
  }

  public createRunnerView(i: number, stepPosition: number): this {
    this.view.createRunner(i, stepPosition);
    return this;
  }

  public createTipNumber(isOn: boolean, stepPosition: number, stepValue:number): this {
    if (isOn) {
      this.view.createTipNumber(this.runnerCounter, this.field.isVertical, stepPosition, stepValue);
    }
    return this;
  }

  public createBar(shouldAddBar: boolean): this {
    if (shouldAddBar) {
      this.view.hasBar = true;
      this.view.createBar(this);
      this.view.updateBarPosition();
    }

    return this;
  }

  public createScale(shouldAddScale: boolean): this {
    if (shouldAddScale) {
      this.view.hasScale = true;
      this.view.createScale();
    }

    return this;
  }

  public onDrag(runnerCounter: number): this {
    $(document).ready(() => {
      this.view.handleDrag(runnerCounter);
    });
    return this;
  }

  public addListeners(isRange: boolean): this {
    this.onClick().onDrag(0).onDrop();
    if (isRange) this.onDrag(1);
    return this;
  }

  public onDrop(): this {
    this.view.handleDrop();
    return this;
  }

  public onInputChange():this {
    this.view.handleInputsChange();
    return this;
  }

  public rebuild(params:PresenterBuildParams):void {
    this.view.panel.clearHTMLElement();
    this.runnerCounter = 0;
    this.build(params);
  }

  public recieveModelLogic(activeRunner: RunnerModel): void {
    if (activeRunner) {
      this.updateRunnerPosition(activeRunner);
      if (this.view.hasTip) this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);
      if (this.view.hasBar) this.updateBarPosition();
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
    // const returnedRunnerPosition = this.runners.map((v, i) => v.setValuesFromInputs(
    //   panelInputsData.runnersValue[i],
    //   panelInputsData.minMax,
    // ));
    // const rebuildData = panelInputsData;
    // rebuildData.returnedRunnerPosition = returnedRunnerPosition;
    this.rebuild(panelInputsData);
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

  private setMinMax(minValue: number, maxValue: number): this {
    this.field.setMinMax(minValue, maxValue);
    this.view.initStartEnd(minValue, maxValue);
    return this;
  }

  public setStep(step: number): this {
    this.runners.forEach((v) => v.setStep(step, this.field.minMax));
    if (step < 1) this.runners.forEach((v) => v.defineSignAfterComma());
    this.view.setStep(step, this.runners[0].stepSignAfterComma);

    return this;
  }

  public updateTipNumber(stepValue: number, instance: number): this {
    this.view.updateTipNumber({ stepValue, instance });
    return this;
  }

  private activatePanel(params: PresenterBuildParams): this {
    if (params.hasInputPanel) {
      this.view.panel.activatePanel.call(this.view, params);
    }
    return this;
  }

  private build(params: PresenterBuildParams): void {
    let {
      minValue = 0,
      maxValue = 100,
      step = 1,
      runnerSize = [40, 40],
      fieldThickness = 6,
      runnersInstantPosition = [0, 100],
    } = params;

    const {
      shouldAddTip = false,
      shouldAddBar = false,
      shouldAddScale = false,
      isRange = false,
      isTestMode = false,
      orientation = 'horizontal',
      hasInputPanel = false,
    } = params;

    //  prettier-ignore
    ({
      minValue, maxValue, step, runnerSize, fieldThickness, runnersInstantPosition,
    } = checkValues(
      {
        minValue, maxValue, step, runnerSize, fieldThickness, runnersInstantPosition,
      },
    ));

    if (!isTestMode) {
      this.setMinMax(minValue, maxValue)
        .activatePanel({
          shouldAddTip,
          shouldAddBar,
          shouldAddScale,
          isRange,
          isTestMode,
          orientation,
          hasInputPanel,
          minValue,
          maxValue,
          step,
          runnerSize,
          fieldThickness,
          runnersInstantPosition,
        })
        .initLayers(runnerSize, fieldThickness, orientation)
        .createRangeSlider({
          isRange,
          shouldAddTip,
          runnerSize,
          minValue,
          maxValue,
          runnersInstantPosition,
        })
        // .onInputChange()
        .setStep(step)
        .createBar(shouldAddBar)
        .createScale(shouldAddScale);
      // .onClick();
    }
  }

  private updateBarPosition(): this {
    this.view.updateBarPosition();
    return this;
  }

  private initLayers(runnerSize: number[], fieldThickness:number, orientation: Orientation): this {
    this.field.setIsVertical(orientation);
    this.view.initializeValues(runnerSize, fieldThickness, orientation);

    return this;
  }

  private onClick(): this {
    this.view.handleClick(this.runners, this.field);
    return this;
  }

  private updateRunnerPosition({ stepPosition, instance }: RunnerModel): void {
    this.view.updateRunnerPosition(stepPosition, instance);
  }
}

export default SliderPresenter;
