import { DataForRunnerUpdatingArgsType } from '../../presenter/presenterInterfaces';
import SliderView from '../../view/SliderView';
import RunnerModel from '../RunnerModel';
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
    nearest = defineNearestRunner(cursorXY, thisView);
  }
  runners[nearest].updateRunnerValues(thisView, cursorXY, runners, runners[nearest]);
};

export default prepareDataForRunnerUpdating;
