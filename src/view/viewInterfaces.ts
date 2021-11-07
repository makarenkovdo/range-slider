import { Orientation } from '../presenter/presenterInterfaces';
import SliderView from './SliderView';

type AddTipNumberToDOMReturned = { minMax: number; i: number };
type UpdateTipNumberArgs = { stepValue: number; instance: number };

type DefineBarKindArgsType = {
  isRange: boolean;
  isVertical: boolean;
  $bar: JQuery<HTMLElement>;
  runnersPosition: number[];
  calcLengthOfRangeBar: (runnersPosition: number[]) => number;
  updateSingleVerticalBarPosition: (runnersPosition: number[], $bar: JQuery<HTMLElement>) => void;
  updateSingleHorizontalBarPosition: (runnersPosition: number[], $bar: JQuery<HTMLElement>) => void;
  updateRangeBarPosition: (
    a: number, // todo enum
    $bar: JQuery<HTMLElement>,
    runnersPosition: number[],
    barLength: number,
  ) => void;
};
type DragEventDataType = {
  thisView: SliderView;
  instance: number;
};

type PrepareScaleDataArgs = {
  divisionQuantity:number; divisionNumber:number;
};

type CreateScaleNumbersArgs = {
  $scaleNumbers?:JQuery<HTMLElement>; minMax:number[]; divisionNumber:number;
  divisionQuantity:number; stepSignAfterComma:number; switcher: number;
  corrector:number; lastOrFirstIterration: number;
};

type CreateScaleLinesBoxArgs = {
  $id:JQuery<HTMLElement>;
  orientation:Orientation;
  fieldSize:number[];
  divisionQuantity:number;
  top: number;
  left: number;
  columnOrRow:string;

};

type CreateScaleNumbersBoxArgs = {
  $id:JQuery<HTMLElement>,
  orientation:Orientation,
  fieldSize:number[],
  divisionQuantity:number,
  width: number,
  height: number,
  top:number,
  left:number,
  columnOrRow: string,
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
};
