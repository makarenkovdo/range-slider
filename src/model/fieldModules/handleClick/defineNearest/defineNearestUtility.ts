const calculateAndCompareLengths = (
  cursorXYInPercent: number,
  runnersPosition: number[],
): number => {
  const lengthToFirstRunner = Math.abs(cursorXYInPercent - runnersPosition[0]);
  const lengthToSecondRunner = Math.abs(cursorXYInPercent - runnersPosition[1]);

  return lengthToFirstRunner - lengthToSecondRunner < 0 ? 0 : 1;
};

const prepareDataForCompare = (
  cursorXY: number[],
  isVertical: boolean,
  fieldSize: number[],
): number => {
  const xySwitcher = isVertical ? 1 : 0;

  const cursorXYInPercent: number = Math.abs(
    100 * xySwitcher - (cursorXY[xySwitcher] / fieldSize[xySwitcher]) * 100,
  );
  return cursorXYInPercent;
};

export { prepareDataForCompare, calculateAndCompareLengths };
