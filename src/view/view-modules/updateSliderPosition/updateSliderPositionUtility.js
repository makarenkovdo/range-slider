const defineSliderType = (isVertical, updatingSlider) => {
  const positioning = [
    ['left', 'width'],
    ['top', 'height'],
  ];
  let datasForUpdating = { updatingSlider, positioning: positioning[0] };
  if (isVertical) datasForUpdating.positioning = positioning[1];
  return datasForUpdating;
};

const setThisSliderPosition = function setThisSliderPositionToThis({ instance, stepPosition }) {
  this.slidersPosition[instance] = stepPosition;
};

// getting the percent of sliderWidth to fieldWidth
const calculatePreperatoryPosition = ($field, positioning) => {
  console.log(positioning);
  return (
    (parseInt($field.children('.slider').css(positioning[1]), 10) /
      parseInt($field.css(positioning[1]), 10)) *
    50
  );
};

// prettier-ignore
const updatePositionToDOM = ({ updatingSlider, positioning }, isVertical, $field) => { 
  const preperatoryPosition = calculatePreperatoryPosition($field, positioning);
  const getVerticalPosition = () => `${100 - updatingSlider.stepPosition - preperatoryPosition}%`;
  const getHorizontalPosition = () => `${updatingSlider.stepPosition - preperatoryPosition}%`;
  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
    console.log(updatingSlider, positioning , isVertical, $field);
  $field.find(`.instance-${updatingSlider.instance}`).css(positioning[0], position);
};

export { setThisSliderPosition, defineSliderType, updatePositionToDOM };
