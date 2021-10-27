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
  console.log(fieldSize);

  const cursorXYInPercent: number =
    (cursorXY[xySwitcher] / parseInt(fieldSize[xySwitcher], 10)) * 100;
  console.log(cursorXYInPercent);
  return cursorXYInPercent;
};

export { prepareDataForCompare, calculateAndCompareLengths };
