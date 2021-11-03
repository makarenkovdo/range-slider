import RunnerModel from '../model/RunnerModel';

type PresenterBuildParams = {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
  shouldAddScale?: boolean;
  isRange?: boolean;
  runnerSize?: number[];
  isTestMode?: boolean;
};

type CreateRangeSliderArgsType = {
  isRange: boolean;
  shouldAddTip: boolean;
  runnerSize: number[];
  minValue: number;
  maxValue: number;
};

type DataForRunnerUpdatingArgsType = {
  runnersPosition: number[];
  isVertical: boolean;
  minMax: number[];
  isRange: boolean;
  fieldSize: number[];
  cursorXY: number[];
  runners: RunnerModel[];
};

type CheckValuesArgs = {
  minValue: number;
  maxValue: number;
  step: number;
  runnerSize: number[];
};

export {
  PresenterBuildParams,
  CreateRangeSliderArgsType,
  DataForRunnerUpdatingArgsType,
  CheckValuesArgs,
};
