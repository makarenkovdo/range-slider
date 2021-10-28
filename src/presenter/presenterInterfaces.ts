type PresenterBuildParams = {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
  isRange?: boolean;
  runnerSize?: number[];
};

type CreateRangeSliderArgsType = {
  isRange: boolean;
  shouldAddTip: boolean;
  runnerSize: number[];
  minValue: number;
  maxValue: number;
};

export { PresenterBuildParams, CreateRangeSliderArgsType };
