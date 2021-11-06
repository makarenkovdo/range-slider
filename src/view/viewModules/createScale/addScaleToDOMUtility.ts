import { Orientation } from '../../../presenter/presenterInterfaces';

function createScaleLines(
  $id:JQuery<HTMLElement>, orientation:Orientation, fieldSize:number[], divisionQuantity:number,
):void {
  $id.append(
    `<div data-testid="test-scale" class="slider__scale-lines slider__scale-lines_${orientation} js-slider__scale-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; left: 20px; top:${fieldSize[1] + 2}px; grid-template-columns: repeat(${2 * divisionQuantity - 1}, 1px)"></div>`,
  );
}

function createScaleNumbers(
  $id:JQuery<HTMLElement>, orientation:Orientation, fieldSize:number[], divisionQuantity:number,
):void {
  $id.append(
    `<div data-testid="test-scale" class="slider__scale-numbers js-slider__scale-numbers" style="height:${
      fieldSize[1]
      // prettier-ignore
    }px; width:${fieldSize[0]}px; top:${3
          * fieldSize[1]}px; left: 10px; grid-template-columns: repeat(${divisionQuantity}, 1px)"></div>`,
  );
}

const createScaleLine = (
  $scaleLines:JQuery<HTMLElement>, divisionQuantity:number, orientation:Orientation,
):void => {
  for (let i = 0; i < 2 * divisionQuantity - 1; i += 1) {
    if (i % 2) {
      $scaleLines.append(`<div class="slider__scale-line slider__scale-line_${orientation} js-slider__scale-line" style="height: 5px"></div>`);
    } else $scaleLines.append(`<div class="slider__scale-line slider__scale-line_${orientation} js-slider__scale-line"></div>`);
  }
};

const createScaleNumber = (
  $scaleNumbers:JQuery<HTMLElement>, minMax:number[], divisionNumber:number,
  divisionQuantity:number, stepSignAfterComma:number,
):void => {
  if (minMax[0] === 0) {
    for (let i = minMax[0]; i < (divisionQuantity + minMax[0]); i += 1) {
      if (i === divisionQuantity + minMax[0] - 1) {
        $scaleNumbers.append(`<div class="slider__scale-number js-slider__scale-number">${minMax[1].toFixed(Math.min(2, stepSignAfterComma))}</div>`);
      } else {
        $scaleNumbers.append(`<div class="slider__scale-number js-slider__scale-number">${(i * divisionNumber).toFixed(Math.min(2, stepSignAfterComma))}</div>`);
        console.log('i,divisionQuantity,minMax,divisionNumber', i, divisionQuantity, minMax, divisionNumber);
      }
    }
  } else {
    for (let i = minMax[0] - divisionNumber; i < (divisionQuantity + minMax[0] - 2); i += 1) {
      $scaleNumbers.append(`<div class="slider__scale-number js-slider__scale-number">${(i * divisionNumber).toFixed(Math.min(2, stepSignAfterComma))}</div>`);
    }
  }
};

export {
  createScaleLines, createScaleNumbers, createScaleLine, createScaleNumber,
};
