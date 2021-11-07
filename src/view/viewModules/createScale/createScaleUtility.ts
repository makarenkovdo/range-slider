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
  const divisionQuantity = Math.max((Math.trunc(Math.min(stepLimits + 1, pixelLimits + 1))), 2);
  // const greatestCommonDivisor = (a:number, b:number):number => {
  //   if (!b) {
  //     return a;
  //   }

  //   return greatestCommonDivisor(b, a % b);
  // };
  // greatestCommonDivisor(stepLimits, pixelLimits);
  // const fractionalNumber = 0;
  // if (stepSignAfterComma) fractionalNumber = 1;
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
  // const { positioning, minMax } = preparedData;

  if (isVertical) {
    $id.append(
      `<div data-testid="test-scale" class="slider__scale-lines slider__scale-lines_${orientation} js-slider__scale-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; top: 20px; left:${fieldSize[0] + 2}px; grid-template-rows: repeat(${2 * divisionQuantity - 1}, 1px)"></div>`,
    );
    $id.append(
      `<div data-testid="test-scale" class="scale-numbers js-scale-numbers" style="height:${
        fieldSize[1]
      }px; width:${fieldSize[0]}px; left:${2 * fieldSize[0]}px; grid-template-rows: repeat(${divisionQuantity}, 1fr);
      "></div>`,
    );
    const size = 'width: 5px';
    const $scaleNumbers = $id.find('.js-slider__scale-numbers');
    const $scaleLines = $id.find('.js-slider__scale-lines');
    createScaleNumber($scaleNumbers, minMax, divisionNumber, divisionQuantity, stepSignAfterComma);
    createScaleLine($scaleLines, divisionQuantity, orientation, minMax, size);
  } else {
    createScaleLines($id, orientation, fieldSize, divisionQuantity);
    createScaleNumbers($id, orientation, fieldSize, divisionQuantity);
    const $scaleNumbers = $id.find('.js-slider__scale-numbers');
    const $scaleLines = $id.find('.js-slider__scale-lines');
    const size = 'height: 5px';
    createScaleNumber($scaleNumbers, minMax, divisionNumber, divisionQuantity, stepSignAfterComma);
    createScaleLine($scaleLines, divisionQuantity, orientation, minMax, size);
  }
};

export { prepareScaleData, addScaleToDom };
