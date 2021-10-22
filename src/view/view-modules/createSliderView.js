const prepareSliderArgs = (i, isVertical) => {
  let positioning = 'left'; // isVertical? 'left':'top'
  let index = i;

  if (isVertical) {
    positioning = 'top';
    if (index === 0) index = 1;
    else index = 0;
  }

  //  set min = 0%, max = 100% for left/top positions
  const minMax = index * 100;
  return { i, positioning, minMax };
};

const addSliderToDom = (preparedData, $id, sliderSize) => {
  const { i, positioning, minMax } = preparedData;
  $id.append(
    `<span class="slider instance-${i}" style="${positioning}:${minMax}%; width:${sliderSize[0]}px; height:${sliderSize[1]}px"></span>`,
  );
};

export { prepareSliderArgs, addSliderToDom };
