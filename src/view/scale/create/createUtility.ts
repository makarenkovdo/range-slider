import { Orientation } from '../../../presenter/presenterInterfaces';
import {
  CreateScaleLinesBoxArgs, CreateScaleNumbersArgs, PrepareScaleDataArgs, CreateScaleNumbersBoxArgs,
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
  if (minMax[0] > 0) {
    divisionNumber = Number(((minMax[1] - minMax[0]) / (divisionQuantity - 1)).toFixed(3));
  }
  return { divisionQuantity, divisionNumber };
};

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
  step: number,
  stepSignAfterComma: number,
  minMax: number[],
  orientation: Orientation,
  { divisionQuantity, divisionNumber }: PrepareScaleDataArgs,
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

  if (isVertical) {
    createScaleLinesBox(createScaleLinesBoxArgs);
    createScaleNumbersBox(createScaleNumbersBoxArgs);
    const smallLine = 'width: 5px';
    const bigLine = 'width: 10px';
    const $scaleLines = $id.find('.js-slider__scale-lines');
    createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');
    createScaleNumbers(
      createScaleNumbersArgs,
    );
    createScaleLines($scaleLines, divisionQuantity, orientation, minMax, smallLine, bigLine);
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
    const $scaleLines = $id.find('.js-slider__scale-lines');
    const smallLine = 'height: 5px';
    const bigLine = 'height: 10px';
    createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');
    createScaleNumbersArgs.switcher = 0;
    createScaleNumbersArgs.lastOrFirstIterration = divisionQuantity - 1;
    createScaleNumbers(createScaleNumbersArgs);
    createScaleLines($scaleLines, divisionQuantity, orientation, minMax, smallLine, bigLine);
  }
};

export { prepareScaleData, addScaleToDom };