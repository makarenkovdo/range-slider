const defineSliderType = (isVertical, updatingSlider) => {
  const positioning = [
    ['left', 'width'],
    ['top', 'height'],
  ];
  const { stepPosition, instance } = updatingSlider;
  let datasForUpdating = { stepPosition, instance, positioning: positioning[0] };
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
const updatePositionToDOM = ({ stepPosition, instance, positioning }, isVertical, $field) => { 
  const preperatoryPosition = calculatePreperatoryPosition($field, positioning);
  const getVerticalPosition = () => `${100 - stepPosition - preperatoryPosition}%`;
  const getHorizontalPosition = () => `${stepPosition - preperatoryPosition}%`;
  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
  $field.find(`.instance-${instance}`).css(positioning[0], position);
};

export { setThisSliderPosition, defineSliderType, updatePositionToDOM };
