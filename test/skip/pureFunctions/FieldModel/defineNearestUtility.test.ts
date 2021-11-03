import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from '../../../../src/model/fieldModules/handleClick/defineNearest/defineNearestUtility';

test('compare length: first number is a cursorXY, and second is a runners coordinates', () => {
  /* cursorXYInPercent: number,
  runnersPosition: number[], */
  expect(calculateAndCompareLengths(50, [0, 57])).toBe(1);
  expect(calculateAndCompareLengths(21, [20, 57])).toBe(0);
});

test('prepareDataForCompare', () => {
  let cursorXY: number[] = [100, 10];
  let isVertical = false;
  let fieldSize: number[] = [400, 20];
  expect(prepareDataForCompare(cursorXY, isVertical, fieldSize)).toBe(25);
  cursorXY = [100, 10];
  isVertical = true;
  fieldSize = [400, 20];
  expect(prepareDataForCompare(cursorXY, isVertical, fieldSize)).toBe(50);
});
