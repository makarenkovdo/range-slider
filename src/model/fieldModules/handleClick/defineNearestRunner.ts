import FieldModel from '../../FieldModel';
import RunnerModel from '../../RunnerModel';
import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

const defineNearestRunner = (
  cursorXY: number[],
  runnersPosition: number[],
  isVertical: boolean,
  fieldSize: number[],
): number => {
  const cursorXYInPercent = prepareDataForCompare(cursorXY, isVertical, fieldSize);

  return calculateAndCompareLengths(cursorXYInPercent, runnersPosition);
};

export default defineNearestRunner;
