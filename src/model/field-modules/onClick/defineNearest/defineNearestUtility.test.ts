import { calculateAndCompareLengths, prepareDataForCompare } from './defineNearestUtility';

test('compare length: first number is a cursorXY, and second is a sliders coordinates', () => {
  expect(calculateAndCompareLengths(50, [0, 57])).toBe(1);
  expect(calculateAndCompareLengths(21, [20, 57])).toBe(0);
});

test('prepareDataForCompare', () => {
  expect(calculateAndCompareLengths(50, [0, 57])).toBe(1);
  expect(calculateAndCompareLengths(21, [20, 57])).toBe(0);
});
