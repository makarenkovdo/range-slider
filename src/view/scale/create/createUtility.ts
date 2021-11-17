import { Orientation } from '../../../presenter/presenterInterfaces';
import {
  CreateScaleLinesBoxArgs,
  CreateScaleNumbersArgs,
  PrepareScaleDataArgs,
  CreateScaleNumbersBoxArgs,
  CreateScaleLinesArgs,
} from '../../viewInterfaces';
import {
  createScaleLines, createScaleLinesBox, createScaleNumbers, createScaleNumbersBox,
} from './addScaleToDOMUtility';

const calcScaleSignAfterComma = (stepSignAfterComma:number, minMax:number[]): number => {
  const minMaxSignAfterComma:number[] = [];
  if (minMax[0].toString().includes('.')) {
    minMaxSignAfterComma.push(minMax[0]
      .toString()
      .split('.')
      .pop().length);
  } else minMaxSignAfterComma.push(0);
  if (minMax[1].toString().includes('.')) {
    minMaxSignAfterComma.push(minMax[1]
      .toString()
      .split('.')
      .pop().length);
  } else minMaxSignAfterComma.push(0);

  return Math.max(stepSignAfterComma, minMaxSignAfterComma[0], minMaxSignAfterComma[1]);
};

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

  let scaleSignAfterComma = calcScaleSignAfterComma(stepSignAfterComma, minMax);
  let shouldAddExtraLine = false;

  const stepLimitsWithoutTrunc:number = (minMax[1] - minMax[0]) / step;
  let stepLimits:number = Math.floor(stepLimitsWithoutTrunc);
  const pixelLimits:number = Math.floor(fieldSize[i] / 40);
  for (let index = 0; stepLimits > pixelLimits; index++) {
    stepLimits /= 2;
  }
  console.log(stepLimits, pixelLimits);

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
  console.log('lineQuantity, segmentInPercent, stepMultiplier');
  console.log(lineQuantity, segmentInPercent, stepMultiplier);

  return {
    lineQuantity,
    segmentInPercent,
    stepMultiplier,
    scaleSignAfterComma,
    shouldAddExtraLine,
    onePxInPercent,
  };
};

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
  step: number,
  stepSignAfterComma: number,
  minMax: number[],
  orientation: Orientation,
  {
    lineQuantity,
    segmentInPercent,
    stepMultiplier,
    scaleSignAfterComma,
    shouldAddExtraLine,
    onePxInPercent,
  }: PrepareScaleDataArgs,
): void => {
  const createScaleLinesBoxArgs:CreateScaleLinesBoxArgs = {
    $id,
    orientation,
    fieldSize,
    lineQuantity,
    top: 5,
    left: fieldSize[0] + 2,
    columnOrRow: 'row',
  };

  const createScaleNumbersBoxArgs: CreateScaleNumbersBoxArgs = {
    $id,
    lineQuantity,
    width: fieldSize[0],
    height: fieldSize[1] + fieldSize[1] / (lineQuantity - 1),
    top: 0,
    left: fieldSize[0] + 20,
    columnOrRow: 'row',
    fieldSize,
  };
  const createScaleLinesArgs: CreateScaleLinesArgs = {
    $scaleLines: $id.find('.js-slider__scale-lines'),
    lineQuantity,
    segmentInPercent,
    orientation,
    minMax,
    smallLine: 'width: 5px',
    bigLine: 'width: 10px',
    step,
    stepMultiplier,
    shouldAddExtraLine,
  };
  const createScaleNumbersArgs: CreateScaleNumbersArgs = {
    switcher: 1,
    lastOrFirstIterration: 0,
    minMax,
    segmentInPercent,
    lineQuantity,
    stepSignAfterComma,
    isVertical,
    stepMultiplier,
    step,
    scaleSignAfterComma,
    shouldAddExtraLine,
    onePxInPercent,
  };

  if (isVertical) {
    createScaleLinesBox(createScaleLinesBoxArgs);
    createScaleNumbersBox(createScaleNumbersBoxArgs);
    createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');
    createScaleNumbers(createScaleNumbersArgs);
    createScaleLines(createScaleLinesArgs);
  } else {
    createScaleLinesBoxArgs.top = fieldSize[1] + 2;
    createScaleLinesBoxArgs.left = 4;
    createScaleLinesBoxArgs.columnOrRow = 'columns';
    createScaleLinesBox(createScaleLinesBoxArgs);

    createScaleNumbersBoxArgs.width = fieldSize[0] + fieldSize[0] / (lineQuantity - 1);
    // eslint-disable-next-line prefer-destructuring
    createScaleNumbersBoxArgs.height = fieldSize[1];
    createScaleNumbersBoxArgs.top = fieldSize[1] + 20;
    createScaleNumbersBoxArgs.left = Math.min((-fieldSize[0] / (2 * lineQuantity)), -17);
    createScaleNumbersBoxArgs.columnOrRow = 'columns';

    createScaleNumbersBox(createScaleNumbersBoxArgs);
    createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');
    createScaleNumbersArgs.switcher = 0;
    createScaleNumbersArgs.lastOrFirstIterration = lineQuantity - 1;
    createScaleNumbers(createScaleNumbersArgs);
    createScaleLinesArgs.$scaleLines = $id.find('.js-slider__scale-lines');
    createScaleLinesArgs.smallLine = 'height: 5px';
    createScaleLinesArgs.bigLine = 'height: 10px';
    createScaleLines(createScaleLinesArgs);
  }
};

export { prepareScaleData, addScaleToDom };
