const initializeValues = function initializeDefaultViewValues(sliderSize, fieldSize, isVertical) {
  this.sliderSize = sliderSize;
  this.fieldSize = fieldSize;
  this.isVertical = isVertical;
  if (this.isVertical) {
    this.corrector = (sliderSize[1] / fieldSize[1]) * 50;
  } else {
    this.corrector = (sliderSize[0] / fieldSize[0]) * 50;
  }
};

export default initializeValues;
