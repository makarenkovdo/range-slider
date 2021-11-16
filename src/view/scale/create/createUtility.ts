import { Orientation } from '../../../presenter/presenterInterfaces';
import {
  CreateScaleLinesBoxArgs, CreateScaleNumbersArgs, PrepareScaleDataArgs, CreateScaleNumbersBoxArgs, CreateScaleLinesArgs,
} from '../../viewInterfaces';
import {
  createScaleLines, createScaleLinesBox, createScaleNumbers, createScaleNumbersBox,
} from './addScaleToDOMUtility';

const prepareScaleData = (
  fieldSize: number[],
  isVertical: boolean,
  minMax: number[],
  step: number,
): PrepareScaleDataArgs => {
  let i = 0;
  if (isVertical) {
    i += 1;
  }
  const stepLimitsWithoutTrunc:number = (minMax[1] - minMax[0]) / step;
  const stepLimits:number = Math.floor(stepLimitsWithoutTrunc);
  const pixelLimits:number = Math.floor(fieldSize[i] / 40);
  const divisionQuantity = Math.max((Math.floor(Math.min(stepLimits + 1, pixelLimits + 1))), 2);
  let divisionNumber = Number(((minMax[1] - minMax[0]) / (divisionQuantity - 1)).toFixed(3));
  const stepMultiplier = Math.floor(divisionNumber / step);

  console.log(divisionNumber, divisionQuantity, 'divisionNumber,divisionQuantity');

  if (minMax[0] > 0) {
    divisionNumber = Number(((minMax[1] - minMax[0]) / (divisionQuantity - 1)).toFixed(3));
  }
  return { divisionQuantity, divisionNumber, stepMultiplier };
};

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
  step: number,
  stepSignAfterComma: number,
  minMax: number[],
  orientation: Orientation,
  { divisionQuantity, divisionNumber, stepMultiplier }: PrepareScaleDataArgs,
): void => {
  const createScaleLinesBoxArgs:CreateScaleLinesBoxArgs = {
    $id, orientation, fieldSize, divisionQuantity, top: 5, left: fieldSize[0] + 2, columnOrRow: 'row',
  };
  const createScaleNumbersArgs: CreateScaleNumbersArgs = {
    switcher: 1,
    lastOrFirstIterration: 0,
    minMax,
    divisionNumber,
    divisionQuantity,
    stepSignAfterComma,
    isVertical,
  };
  const createScaleNumbersBoxArgs: CreateScaleNumbersBoxArgs = {
    $id,
    divisionQuantity,
    width: fieldSize[0],
    height: fieldSize[1] + fieldSize[1] / (divisionQuantity - 1),
    top: 0,
    left: fieldSize[0] + 20,
    columnOrRow: 'row',
  };
  const createScaleLinesArgs: CreateScaleLinesArgs = {
    $scaleLines: $id.find('.js-slider__scale-lines'),
    divisionQuantity,
    divisionNumber,
    orientation,
    minMax,
    smallLine: 'width: 5px',
    bigLine: 'width: 10px',
    step,
    stepMultiplier,
  }

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

    createScaleNumbersBoxArgs.width = fieldSize[0] + fieldSize[0] / (divisionQuantity - 1);
    // eslint-disable-next-line prefer-destructuring
    createScaleNumbersBoxArgs.height = fieldSize[1];
    createScaleNumbersBoxArgs.top = fieldSize[1] + 20;
    createScaleNumbersBoxArgs.left = Math.min((-fieldSize[0] / (2 * divisionQuantity)), -17);
    createScaleNumbersBoxArgs.columnOrRow = 'columns';


    createScaleNumbersBox(createScaleNumbersBoxArgs);
    createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');
    createScaleNumbersArgs.switcher = 0;
    createScaleNumbersArgs.lastOrFirstIterration = divisionQuantity - 1;
    createScaleNumbers(createScaleNumbersArgs);
    createScaleLinesArgs.$scaleLines = $id.find('.js-slider__scale-lines');
    createScaleLinesArgs.smallLine = 'height: 5px';
    createScaleLinesArgs.bigLine = 'height: 10px';
    createScaleLines(createScaleLinesArgs);
  }
};

export { prepareScaleData, addScaleToDom };
