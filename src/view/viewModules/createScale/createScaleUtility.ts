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
  const stepLimits = Math.trunc((minMax[1] - minMax[0]) / step);
  const pixelLimits = Math.trunc(fieldSize[i] / 40);
  const divisionQuantity = Math.max((Math.trunc(Math.min(stepLimits, pixelLimits))),2);
  const greatestCommonDivisor = (a:number, b:number):number => {
    if (!b) {
      return a;
    }

    return greatestCommonDivisor(b, a % b);
  };
  // greatestCommonDivisor(stepLimits, pixelLimits);
  let fractionalNumber = 0;
  // if (stepSignAfterComma) fractionalNumber = 1;
  const divisionNumber = Number(((minMax[1] - minMax[0]) / (divisionQuantity - 1)).toFixed(2));
  console.log('divisionNumber',divisionNumber);
  return { divisionQuantity, divisionNumber };
};

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
  step: number,
  stepSignAfterComma: number,
  minMax: number[],
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
    $id.append(
      `<div data-testid="test-scale" class="scale-lines js-scale-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; left: 20px; top:${fieldSize[1]}px; grid-template-columns: repeat(${divisionQuantity}, 1px)"></div>`,
    );
    $id.append(
      `<div data-testid="test-scale" class="scale-lines js-scale-small-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; left: 20px; top:${fieldSize[1]}px; grid-template-columns: repeat(${divisionQuantity*2}, 1px)"></div>`,
    );
    $id.append(
      `<div data-testid="test-scale" class="scale-numbers js-scale-numbers" style="height:${
        fieldSize[1]
        // prettier-ignore
      }px; width:${fieldSize[0]}px; top:${2
        * fieldSize[1]}px; left: 10px; grid-template-columns: repeat(${divisionQuantity}, 1px)"></div>`,
    );
    
    for (let i = minMax[0]; i < (divisionQuantity+minMax[0]); i += 1) {
      console.log('i, divisionNumber, divisionQuantity', i, divisionNumber, divisionQuantity);

      $id.find('.js-scale-numbers').append(`<div class="scale-number js-scale-number">${(i * divisionNumber).toFixed(stepSignAfterComma)}</div>`);
    }
  }
  for (let i = 0; i < divisionQuantity; i += 1) {
    $id.find('.js-scale-lines').append('<div class="scale-line js-scale-line"></div>');
  }
};

export { prepareScaleData, addScaleToDom };
