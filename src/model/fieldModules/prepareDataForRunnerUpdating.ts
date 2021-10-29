import { DataForRunnerUpdatingArgsType } from '../../presenter/presenterInterfaces';
import { UpdateRunnerValuesArgs } from '../runnerModules/runnerInterfaces';
import defineNearestRunner from './handleClick/defineNearestRunner';

const prepareDataForRunnerUpdating = ({
  runnersPosition,
  isVertical,
  minMax,
  isRange,
  fieldSize,
  cursorXY,
  runners,
}: DataForRunnerUpdatingArgsType): void => {
  let nearest = 0;

  if (isRange) {
    nearest = defineNearestRunner(cursorXY, isVertical, fieldSize, runnersPosition);
  }

  const updateRunnerValuesArgs: UpdateRunnerValuesArgs = {
    cursorXY,
    isVertical,
    minMax,
    isRange,
    fieldSize,
    runners,
    activeRunner: runners[nearest],
  };
  runners[nearest].updateRunnerValues(updateRunnerValuesArgs);
};

export default prepareDataForRunnerUpdating;
