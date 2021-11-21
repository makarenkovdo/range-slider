import RunnerModel from '../model/RunnerModel';

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
  DataForRunnerUpdatingArgsType,
  CheckValuesArgs,
  Orientation,
  GetValuesReturned,
};
