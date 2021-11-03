const prepareDivisionsQuantity = (fieldSize: number[], isVertical: boolean): number => {
  let i = 0;
  if (isVertical) {
    i += 1;
  }
  const divisionQuantity = fieldSize[i] / 20;
  return divisionQuantity;
};

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
  divisionQuantity: number,
): void => {
  // const { positioning, minMax } = preparedData;
  $id.append(
    `<div data-testid="test-scale" class="scale-lines js-scale-lines" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; top:${fieldSize[1]}px"></div>`,
  );
  $id.append(
    `<div data-testid="test-scale" class="scale-numbers js-scale-numbers" style="height:${
      fieldSize[1]
    }px; width:${fieldSize[0]}px; top:${2 * fieldSize[1]}px"></div>`,
  );
  for (let i = 0; i < 18; i += 1) {
    $id.find('.js-scale-lines').append('<div class="scale-line js-scale-line"></div>');
  }
  for (let i = 0; i < 18; i += 1) {
    $id.find('.js-scale-numbers').append(`<div class="scale-number js-scale-number">${i}</div>`);
  }
};

export { prepareDivisionsQuantity, addScaleToDom };
