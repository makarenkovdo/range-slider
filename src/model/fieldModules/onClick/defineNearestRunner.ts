import FieldModel from '../../FieldModel';
import RunnerModel from '../../RunnerModel';
import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

export type DataType = {
  fieldSize: number[];
  runners: RunnerModel[];
  isVertical: boolean;
  isRange: boolean;
  cursorXY: number[];
  minValue: number;
  maxValue: number;
};

const defineNearestRunner = (
  cursorXY: number[],
  runnersPosition: number[],
  isVertical: boolean,
  fieldSize: number[],
): number => {
  const cursorXYInPercent = prepareDataForCompare(cursorXY, isVertical, fieldSize);

  return calculateAndCompareLengths(cursorXYInPercent, runnersPosition);
};

export { defineNearestRunner };
