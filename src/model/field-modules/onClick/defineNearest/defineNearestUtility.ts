const calculateAndCompareLengths = (
  cursorXYInPercent: number,
  slidersPosition: number[],
): number => {
  const lengthToFirstSlider = Math.abs(cursorXYInPercent - slidersPosition[0]);
  const lengthToSecondSlider = Math.abs(cursorXYInPercent - slidersPosition[1]);

  return lengthToFirstSlider - lengthToSecondSlider < 0 ? 0 : 1;
};

const prepareDataForCompare = (
  cursorXY: number[],
  isVertical: boolean,
  fieldSize: string[],
): number => {
  const xySwitcher = isVertical ? 1 : 0;
  // prettier-ignore

  const cursorXYInPercent: number = Math.abs(
    100 * xySwitcher - (cursorXY[xySwitcher] / parseInt(fieldSize[xySwitcher], 10)) * 100,
  );
  return cursorXYInPercent;
};

export { prepareDataForCompare, calculateAndCompareLengths };
