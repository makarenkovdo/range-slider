const prepareScaleData = (
  fieldSize: number[],
  isVertical: boolean,
  minMax: number[],
  step: number,
): number => {
  let i = 0;
  if (isVertical) {
    i += 1;
  }
  const stepLimits = (minMax[1] - minMax[0]) / step;
  const pixelLimits = fieldSize[i] / 20;
  const divisionQuantity = Math.trunc(Math.min(stepLimits, pixelLimits));
  return divisionQuantity;
};

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
  step: number,
  minMax: number[],
  divisionQuantity: number,
): void => {
  // const { positioning, minMax } = preparedData;
  if (isVertical) {
    $id.append(
      `<div data-testid="test-scale" class="scale-lines js-scale-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; left:${fieldSize[0]}px; grid-template-rows: repeat(${divisionQuantity}, 1px)"></div>`,
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
      `<div data-testid="test-scale" class="scale-lines js-scale-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; top:${fieldSize[1]}px; grid-template-columns: repeat(${divisionQuantity}, 1px)"></div>`,
    );
    $id.append(
      `<div data-testid="test-scale" class="scale-numbers js-scale-numbers" style="height:${
        fieldSize[1]
        // prettier-ignore
      }px; width:${fieldSize[0]}px; top:${2
        * fieldSize[1]}px; grid-template-columns: repeat(${divisionQuantity}, 1fr)"></div>`,
    );
    for (let i = 0; i <= divisionQuantity; i += 1) {
      $id.find('.js-scale-numbers').append(`<div class="scale-number js-scale-number">${i * (divisionQuantity / minMax[1])}</div>`);
    }
  }
  for (let i = 0; i <= divisionQuantity; i += 1) {
    $id.find('.js-scale-lines').append('<div class="scale-line js-scale-line"></div>');
  }
};

export { prepareScaleData, addScaleToDom };
