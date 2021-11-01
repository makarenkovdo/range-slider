import RunnerModel from '../model/RunnerModel';

type PresenterBuildParams = {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
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

type Payload = {
  setMinMaxArgs?: SetMinMaxArgs;
  createBarArgs?: CreateBarArgs;
};

type SetMinMaxArgs = {
  minValue: number;
  maxValue: number;
};
type CreateBarArgs = {
  shouldAddBar: boolean;
};

type ActionType = 'createBar' | 'setMinMax';

export {
  PresenterBuildParams,
  CreateRangeSliderArgsType,
  DataForRunnerUpdatingArgsType,
  Payload,
  SetMinMaxArgs,
  CreateBarArgs,
  ActionType,
};
