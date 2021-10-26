import SliderModel from '../model/slider-model';

type AddTipNumberToDOMReturned = { minMax: number; i: number };
type UpdateTipNumberArgs = { stepValue: number; instance: number };

type DefineBarKindArgsType = {
  isRange: boolean;
  activeSlider: SliderModel;
  isVertical: boolean;
  $bar: JQuery<HTMLElement>;
  slidersPosition: number[];
  calcLengthOfRangeBar: (slidersPosition: number[]) => number;
  updateSingleVerticalBarPosition: (activeSlider: SliderModel, $bar: JQuery<HTMLElement>) => void;
  updateSingleHorizontalBarPosition: (activeSlider: SliderModel, $bar: JQuery<HTMLElement>) => void;
  updateRangeBarPosition: (
    a: number, // todo enum
    activeSlider: SliderModel,
    $bar: JQuery<HTMLElement>,
    slidersPosition: number[],
    barLength: number,
  ) => void;
};
export { AddTipNumberToDOMReturned, UpdateTipNumberArgs, DefineBarKindArgsType };
