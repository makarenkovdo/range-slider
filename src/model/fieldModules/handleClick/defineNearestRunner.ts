import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

const defineNearestRunner = (
  cursorXY: number[],
  isVertical: boolean,
  fieldSize: number[],
  runnersPosition: number[],
): number => {
  const cursorXYInPercent = prepareDataForCompare(cursorXY, isVertical, fieldSize);

  return calculateAndCompareLengths(cursorXYInPercent, runnersPosition);
};

export default defineNearestRunner;
