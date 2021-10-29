import SliderView from '../../../view/SliderView';
import FieldModel from '../../FieldModel';
import RunnerModel from '../../RunnerModel';
import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

const defineNearestRunner = (
  cursorXY: number[],
  { isVertical, fieldSize, runnersPosition }: SliderView,
): number => {
  const cursorXYInPercent = prepareDataForCompare(cursorXY, isVertical, fieldSize);

  return calculateAndCompareLengths(cursorXYInPercent, runnersPosition);
};

export default defineNearestRunner;
