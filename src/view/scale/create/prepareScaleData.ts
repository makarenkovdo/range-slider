import { PrepareScaleDataArgs } from '../../viewInterfaces';

const prepareScaleData = (
  fieldSize: number[],
  isVertical: boolean,
  minMax: number[],
  step: number,
  stepSignAfterComma: number,
): PrepareScaleDataArgs => {
  let i = 0;
  if (isVertical) {
    i += 1;
  }

  const onePxInPercent = 100 / fieldSize[i];

  let scaleSignAfterComma = stepSignAfterComma;
  let shouldAddExtraLine = false;

  const stepLimitsWithoutTrunc:number = (minMax[1] - minMax[0]) / step;
  let stepLimits:number = Math.floor(stepLimitsWithoutTrunc);
  const pixelLimits:number = Math.floor(fieldSize[i] / 40);
  for (let index = 0; stepLimits > pixelLimits; index += 1) {
    stepLimits /= 2;
  }

  let lineQuantity = Math.floor(stepLimits);
  let segmentInPercent = Number(((minMax[1] - minMax[0]) / (lineQuantity)).toFixed(3));
  const stepMultiplier = Math.floor(segmentInPercent / step);

  if (step * (lineQuantity - 1) * stepMultiplier !== minMax[1] - minMax[0]) {
    scaleSignAfterComma += 1;
    shouldAddExtraLine = true;
    const scaleStepBetweenTwoLastLines = fieldSize[i]
      - (((step * stepMultiplier * (lineQuantity - 1))
      / (minMax[1] - minMax[0])) * fieldSize[i]);

    if (scaleStepBetweenTwoLastLines < 50) lineQuantity -= 1;
  }

  if (minMax[0] > 0) {
    segmentInPercent = Number(((minMax[1] - minMax[0]) / (lineQuantity - 1)).toFixed(3));
  }

  return {
    lineQuantity,
    segmentInPercent,
    stepMultiplier,
    scaleSignAfterComma,
    shouldAddExtraLine,
    onePxInPercent,
  };
};

export default prepareScaleData;
