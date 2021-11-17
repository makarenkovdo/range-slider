import { Orientation } from '../../../presenter/presenterInterfaces';
import {
  CreateScaleLinesBoxArgs,
  CreateScaleNumbersArgs,
  PrepareScaleDataArgs,
  CreateScaleNumbersBoxArgs,
  CreateScaleLinesArgs,
} from '../../viewInterfaces';
import createScaleLines from './addScaleToDom/createScaleLines';
import createScaleLinesBox from './addScaleToDom/createScaleLinesBox';
import createScaleNumbers from './addScaleToDom/createScaleNumbers';
import createScaleNumbersBox from './addScaleToDom/createScaleNumbersBox';

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
    createScaleLinesArgs.$scaleLines = $id.find('.js-slider__scale-lines');
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
    createScaleNumbersBoxArgs.left = 0;
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

export default addScaleToDom ;
