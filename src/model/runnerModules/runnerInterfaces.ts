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

export { UpdateRunnerValuesArgs };
