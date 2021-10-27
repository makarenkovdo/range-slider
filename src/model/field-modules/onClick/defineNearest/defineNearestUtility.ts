const calculateAndCompareLengths = (
  cursorXYInPercent: number,
  slidersPosition: number[],
): number => {
  const lengthToFirstSlider = Math.abs(cursorXYInPercent - slidersPosition[0]);
  const lengthToSecondSlider = Math.abs(cursorXYInPercent - slidersPosition[1]);
  console.log('sliderspos:', slidersPosition[0], slidersPosition[1]);

  return lengthToFirstSlider - lengthToSecondSlider < 0 ? 0 : 1;
};

const prepareDataForCompare = (
  cursorXY: number[],
  isVertical: boolean,
  fieldSize: string[],
): number => {
  const xySwitcher = isVertical ? 1 : 0;
  // prettier-ignore
  console.log('cursorXY', cursorXY);

  const cursorXYInPercent: number = Math.abs(
    100 * xySwitcher - (cursorXY[xySwitcher] / parseInt(fieldSize[xySwitcher], 10)) * 100,
  );
  // console.log('cur, field:', cursorXY[xySwitcher], fieldSize[xySwitcher]);
  // console.log('RESULT IN %:', cursorXYInPercent);

  return cursorXYInPercent;
};

export { prepareDataForCompare, calculateAndCompareLengths };
