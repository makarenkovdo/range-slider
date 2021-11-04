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

export {
  AddTipNumberToDOMReturned,
  UpdateTipNumberArgs,
  DefineBarKindArgsType,
  DragEventDataType,
  PrepareScaleDataArgs,
};
