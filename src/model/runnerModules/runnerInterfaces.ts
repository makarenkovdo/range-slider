import RunnerModel from '../RunnerModel';

type UpdateRunnerValuesArgs = {
  cursorXY: number[];
  isVertical: boolean;
  minMax: number[];
  isRange: boolean;
  fieldSize: number[];
  runners: RunnerModel[];
  activeRunner: RunnerModel;
};

type CalculateStepValueAndPositionArgs = {
  positionInPercent: number;
  step: number;
  stepInPercent: number;
  value: number;
  stepSignAfterComma: number;
};

type AssignIfHasOwnKeys = 'stepPosition' | 'stepValue' | 'value' | 'positionInPercent';

type CheckCollisionSubargs = {
  stepPosition: number;
  stepValue: number;
};

type CalculateStepPositionFromInputReturned = {
  stepPosition: number;
  stepValue: number;
};

export {
  UpdateRunnerValuesArgs,
  AssignIfHasOwnKeys,
  CalculateStepValueAndPositionArgs,
  CheckCollisionSubargs,
  CalculateStepPositionFromInputReturned,
};
