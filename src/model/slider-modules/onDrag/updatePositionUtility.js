/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["thisSlider"] }] */

const calculatePositionInPercentage = (isVertical, thisSlider, offsetX, offsetY) => {
  const cursorXY = [offsetX, offsetY];

  if (isVertical) {
    const fieldHeight = thisSlider.$field[0].offsetHeight;
    return ((fieldHeight - (cursorXY[1] + 1)) * 100) / fieldHeight;
  }
  return ((cursorXY[0] + 5) * 100) / thisSlider.$field[0].offsetWidth;
};

const setPositionInPercentage = (thisSlider, positionInPercentage) => {
  thisSlider.positionInPercentage = positionInPercentage;
};

const setValue = (thisSlider, value) => {
  thisSlider.value = value;
};

const calculateValue = (minValue, maxValue, thisSlider) => {
  const fieldLength = maxValue - minValue;
  return thisSlider.positionInPercentage * (fieldLength / 100) + +minValue;
};

const calculateStepValueAndPosition = (thisSlider) => {
  const stepPosition = (
    Math.round(thisSlider.positionInPercentage / thisSlider.step) * thisSlider.step
  ).toFixed(thisSlider.stepSignAfterComma);
  const stepValue = (Math.round(thisSlider.value / thisSlider.step) * thisSlider.step).toFixed(
    thisSlider.stepSignAfterComma,
  );
  return { stepPosition, stepValue };
};

export {
  calculatePositionInPercentage,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercentage,
  setValue,
};
