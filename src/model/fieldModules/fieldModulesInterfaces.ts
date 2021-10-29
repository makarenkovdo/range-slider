interface InitDataAndSizeArgs {
  $element: JQuery<HTMLElement>;
  minValue: number;
  maxValue: number;
}

type HandleClickDataType = {
  fieldSize: number[];
  runners: RunnerModel[];
  isVertical: boolean;
  isRange: boolean;
  minMax: number[];
};
export { HandleClickDataType, InitDataAndSizeArgs };
