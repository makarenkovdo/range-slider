const getInitValues = (isVertical, $id) => {
  let elementSize = 0;
  let parentSize = 0;
  let measurement = 'width';
  if (isVertical) {
    measurement = 'height';
  }

  elementSize = parseInt($id.children('.slider.instance-0').css(measurement), 10);
  parentSize = parseInt($id.css(measurement), 10);
  return [elementSize, parentSize];
};
const calcPoseCorrector = (elementSize, parentSize) => {
  return (elementSize / parentSize) * 50;
};
const setInitValues = (correctingValue) => {
  // this.$element = controller.slider[0].$element;
  // this.$parent = controller.field.$element;
  // this.isVertical = controller.field.isVertical;
  // this.corrector = correctingValue;
};

export { getInitValues, calcPoseCorrector, setInitValues };
