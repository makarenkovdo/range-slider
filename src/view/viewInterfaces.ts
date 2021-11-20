import { Orientation } from '../presenter/presenterInterfaces';
import Runner from './runner/Runner';
import SliderView from './SliderView';

type AddTipNumberToDOMReturned = { minMax: number; i: number };
type UpdateTipNumberArgs = { stepValue: number; instance: number };

type DefineBarKindArgsType = {
  isRange: boolean;
  isVertical: boolean;
  $bar: undefined | JQuery<HTMLElement>;
  runnersPosition: number[];
  fieldThickness: number;
  calcLengthOfRangeBar: (runnersPosition: number[]) => number;
  updateSingleVerticalBarPosition: (
    runnersPosition: number[],
    fieldThickness: number,
    $bar: JQuery<HTMLElement> | undefined,
  ) => void;
  updateSingleHorizontalBarPosition: (
    runnersPosition: number[],
    fieldThickness: number,
    $bar: JQuery<HTMLElement> | undefined,
  ) => void;
  updateRangeBarPosition: (
    enumNumber: number,
    $bar: JQuery<HTMLElement> | undefined,
    runnersPosition: number[],
    fieldThickness: number,
    barLength: number,
  ) => void;
};
type DragEventDataType = {
  thisRunner: Runner;
  instance: number;
};

type PrepareScaleDataArgs = {
  lineQuantity:number;
  segmentInPercent:number;
  stepMultiplier:number;
  scaleSignAfterComma: number;
  shouldAddExtraLine: boolean;
  onePxInPercent: number;
};

type CreateScaleLinesBoxArgs = {
  $id:JQuery<HTMLElement>;
  orientation:Orientation;
  fieldSize:number[];
  lineQuantity:number;
  top: number;
  left: number;
  columnOrRow:string;

};

type CreateScaleNumbersBoxArgs = {
  $id:JQuery<HTMLElement>,
  lineQuantity:number,
  width: number,
  height: number,
  top:number,
  left:number,
  columnOrRow: string,
  fieldSize:number[];

};

type CreateScaleLinesArgs = {
  $scaleLines:JQuery<HTMLElement>;
  minMax:number[];
  segmentInPercent:number;
  lineQuantity:number;
  orientation: Orientation;
  smallLine:string;
  bigLine: string;
  step: number;
  stepMultiplier: number;
  shouldAddExtraLine: boolean;
};
type CreateScaleNumbersArgs = {
  $scaleNumbers:JQuery<HTMLElement>;
  minMax:number[];
  segmentInPercent:number;
  lineQuantity:number;
  stepSignAfterComma:number;
  switcher: number;
  lastOrFirstIterration: number;
  isVertical: boolean;
  stepMultiplier:number;
  step: number;
  scaleSignAfterComma: number;
  shouldAddExtraLine: boolean;
  onePxInPercent: number;
  orientation: string;
};

type HandleInputsEventData = { sliderView: SliderView; panelSelectors: PanelSelectors };

type PanelInputsData = {
  minMax: number[];
  runnersInstantPosition: number[];
  runnerSize:number[];
  isRange:boolean;
  hasBar:boolean;
  hasTip:boolean;
  hasScale:boolean;
  isVertical:boolean;
  returnedRunnerPosition?: RunnersInstantPosition[];
};

type PanelSelectors = {
  $minValueInput: HTMLInputElement;
  $maxValueInput: HTMLInputElement;
  $runnerSizeInput: HTMLInputElement;
  $stepInput: HTMLInputElement;
  $isRangeInput: HTMLInputElement;
  $orientationInput: HTMLInputElement;
  $hasScale: HTMLInputElement;
  $hasBar: HTMLInputElement;
  $hasTip: HTMLInputElement;
  $runner0ValueInput: HTMLInputElement;
  $runner1ValueInput: HTMLInputElement;
};

type RunnersInstantPosition = {
  stepPosition: number;
  stepValue: number;
};

export {
  AddTipNumberToDOMReturned,
  UpdateTipNumberArgs,
  DefineBarKindArgsType,
  DragEventDataType,
  PrepareScaleDataArgs,
  CreateScaleNumbersArgs,
  CreateScaleLinesBoxArgs,
  CreateScaleNumbersBoxArgs,
  PanelSelectors,
  HandleInputsEventData,
  PanelInputsData,
  RunnersInstantPosition,
  CreateScaleLinesArgs,

};
