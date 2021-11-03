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
    `<div data-testid="test-scale" class="scale js-scale" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; top:${fieldSize[1]}px"></div>`,
  );
  for (let i = 0; i < divisionQuantity; i += 1) {
    $id.find('.js-scale').append(`<div class="scale-division js-scale-division"></div>`);
  }
};

export { prepareDivisionsQuantity, addScaleToDom };
