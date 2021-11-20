import RunnerModel from '../model/RunnerModel';

type PresenterBuildParamsBeforeChecking = {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
  shouldAddScale?: boolean;
  isRange?: boolean;
  runnerSize?: number[];
  fieldThickness?: number;
  orientation?: Orientation;
  runnersInstantPosition?: number[];
  hasInputPanel?: boolean;
  isTestMode?: boolean;
};
type PresenterBuildParams = {
  minValue: number;
  maxValue: number;
  step: number;
  shouldAddTip: boolean;
  shouldAddBar: boolean;
  shouldAddScale: boolean;
  isRange: boolean;
  runnerSize: number[];
  fieldThickness: number;
  orientation: Orientation;
  runnersInstantPosition: number[];
  isTestMode?: boolean;
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
  fieldThickness: number;
  runnersInstantPosition: number[];
};

type Orientation = 'vertical' | 'horizontal';

type GetValuesReturned = {
  firstRunnerValue: number;
  secondRunnerValue?: number | undefined;
};

export {
  PresenterBuildParams,
  DataForRunnerUpdatingArgsType,
  CheckValuesArgs,
  Orientation,
  PresenterBuildParamsBeforeChecking,
  GetValuesReturned,
};
