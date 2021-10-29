import { DataForRunnerUpdatingArgsType } from '../../presenter/presenterInterfaces';
import SliderView from '../../view/SliderView';
import RunnerModel from '../RunnerModel';
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
  activeRunner,
}: DataForRunnerUpdatingArgsType): void => {
  let nearest = 0;

  if (thisView.isRange) {
    nearest = defineNearestRunner(cursorXY, isVertical, fieldSize, runnersPosition);
  }

  const updateRunnerValuesArgs: UpdateRunnerValuesArgs = {
    isVertical,
    minMax,
    isRange,
    fieldSize,
    cursorXY,
    runners,
    activeRunner: runners[nearest],
  };
  runners[nearest].updateRunnerValues(updateRunnerValuesArgs);
};

export default prepareDataForRunnerUpdating;
