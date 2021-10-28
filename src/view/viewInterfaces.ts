import RunnerModel from '../model/RunnerModel';

type AddTipNumberToDOMReturned = { minMax: number; i: number };
type UpdateTipNumberArgs = { stepValue: number; instance: number };

type DefineBarKindArgsType = {
  isRange: boolean;
  activeRunner: RunnerModel;
  isVertical: boolean;
  $bar: JQuery<HTMLElement>;
  runnersPosition: number[];
  calcLengthOfRangeBar: (runnersPosition: number[]) => number;
  updateSingleVerticalBarPosition: (activeRunner: RunnerModel, $bar: JQuery<HTMLElement>) => void;
  updateSingleHorizontalBarPosition: (activeRunner: RunnerModel, $bar: JQuery<HTMLElement>) => void;
  updateRangeBarPosition: (
    a: number, // todo enum
    activeRunner: RunnerModel,
    $bar: JQuery<HTMLElement>,
    runnersPosition: number[],
    barLength: number,
  ) => void;
};
export { AddTipNumberToDOMReturned, UpdateTipNumberArgs, DefineBarKindArgsType };
