// const prepareScaleArgs = (i: number, isVertical: boolean): PreparedDataType => {
//   let positioning = 'left';
//   let minMax = 100 * i;

//   if (isVertical) {
//     positioning = 'top';
//     minMax = 100 - minMax;
//   }

//   //  set min = 0%, max = 100% for left/top positions
//   // console.log(i, positioning, minMax, isVertical);

//   return { i, positioning, minMax };
// };

const addScaleToDom = (
  isVertical: boolean,
  $id: JQuery<HTMLElement>,
  fieldSize: number[],
): void => {
  // const { positioning, minMax } = preparedData;
  $id.append(
    `<div data-testid="test-scale" class="scale js-scale" style="height:${fieldSize[1]}px; width:${fieldSize[0]}px; top:${fieldSize[1]}px"></div>`,
  );
};

export default addScaleToDom;
