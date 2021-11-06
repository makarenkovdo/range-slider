import { Orientation } from '../../../presenter/presenterInterfaces';
import { PrepareScaleDataArgs } from '../../viewInterfaces';
import {
  createScaleLine, createScaleLines, createScaleNumber, createScaleNumbers,
} from './addScaleToDOMUtility';

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
  const stepLimits = Math.trunc((minMax[1] - minMax[0]) / step);
  const pixelLimits = Math.trunc(fieldSize[i] / 40);
  const divisionQuantity = Math.max((Math.trunc(Math.min(stepLimits, pixelLimits))), 2);
  const greatestCommonDivisor = (a:number, b:number):number => {
    if (!b) {
      return a;
    }

    return greatestCommonDivisor(b, a % b);
  };
  // greatestCommonDivisor(stepLimits, pixelLimits);
  const fractionalNumber = 0;
  // if (stepSignAfterComma) fractionalNumber = 1;
  const divisionNumber = Number(((minMax[1] - minMax[0]) / (divisionQuantity - 1)).toFixed(2));
  console.log('minMax[1] - minMax[0]', minMax[1] - minMax[0]);
  console.log('divisionQuantity', divisionQuantity);

  console.log('divisionNumber', divisionNumber);
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
  // const { positioning, minMax } = preparedData;

  if (isVertical) {
    $id.append(
      `<div data-testid="test-scale" class="scale-lines js-scale-lines" style="height:${fieldSize[1] - 40}px; width:${fieldSize[0]}px; top: 20px; left:${fieldSize[0]}px; grid-template-rows: repeat(${divisionQuantity}, 1px)"></div>`,
    );
    $id.append(
      `<div data-testid="test-scale" class="scale-numbers js-scale-numbers" style="height:${
        fieldSize[1]
      }px; width:${fieldSize[0]}px; left:${2 * fieldSize[0]}px; grid-template-rows: repeat(${divisionQuantity}, 1fr);
      "></div>`,
    );
    for (let i = 0; i < divisionQuantity; i += 1) {
      $id.find('.js-scale-numbers').append(`<div class="scale-number js-scale-number">${100 - i * step}</div>`);
    }
  } else {
    createScaleLines($id, orientation, fieldSize, divisionQuantity);
    createScaleNumbers($id, orientation, fieldSize, divisionQuantity);
    const $scaleNumbers = $id.find('.js-slider__scale-numbers');
    const $scaleLines = $id.find('.js-slider__scale-lines');
    createScaleNumber($scaleNumbers, minMax, divisionNumber, divisionQuantity, stepSignAfterComma);
    createScaleLine($scaleLines, divisionQuantity, orientation);
  }
};

export { prepareScaleData, addScaleToDom };
