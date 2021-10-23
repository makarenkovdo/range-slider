//  implementation of airbnb rule #7.12
const assignIfHasOwn = (obj, key, value) => {
  const newObj = Object.prototype.hasOwnProperty.call(obj, key) ? obj : false;
  newObj[key] = value;
};

const checkCollision = ({ stepPosition, stepValue }, slider, thisSlider) => {
  const isCollisionFirst = () =>
    (!thisSlider.isVertical &&
      thisSlider.instance === 0 &&
      stepPosition - slider[1].stepPosition >= thisSlider.step) ||
    (thisSlider.isVertical &&
      thisSlider.instance === 0 &&
      stepPosition - slider[1].stepPosition <= thisSlider.step);

  // prettier-ignore
  const isCollisionSecond = () => (
    (!thisSlider.isVertical && thisSlider.instance === 1
        && stepPosition - slider[0].stepPosition <= thisSlider.step)
        || (thisSlider.isVertical && thisSlider.instance === 0
          && stepPosition - slider[0].stepPosition >= thisSlider.step)
  );

  if (isCollisionFirst()) {
    thisSlider.stepPosition = +slider[1].stepPosition - thisSlider.step;
    thisSlider.stepValue = +slider[1].stepValue - thisSlider.step;
  } else if (isCollisionSecond()) {
    thisSlider.stepPosition = +slider[0].stepPosition + thisSlider.step;
    thisSlider.stepValue = +slider[0].stepValue + thisSlider.step;
  } else {
    thisSlider.stepPosition = stepPosition;
    thisSlider.stepValue = stepValue;
  }
};
const calculatePositionInPercent = (isVertical, thisSlider, offsetX, offsetY) => {
  const cursorXY = [offsetX, offsetY];

  if (isVertical) {
    const fieldHeight = thisSlider.$field[0].offsetHeight;
    return ((fieldHeight - (cursorXY[1] + 1)) * 100) / fieldHeight;
  }
  return ((cursorXY[0] + 5) * 100) / thisSlider.$field[0].offsetWidth;
};

const setPositionInPercent = (thisSlider, newPositionInPercent) => {
  assignIfHasOwn(thisSlider, 'positionInPercent', newPositionInPercent);
  //   const pureThisSlider = Object.prototype.hasOwnProperty.call(thisSlider, 'positionInPercent')
  //     ? thisSlider
  //     : false;
  //   pureThisSlider.positionInPercent = newPositionInPercent;
  //   positionInPercent = newPositionInPercent;

  console.log(thisSlider.positionInPercent);
};

const setValue = (thisSlider, value) => {
  thisSlider.value = value;
};

const calculateValue = (minValue, maxValue, thisSlider) => {
  const fieldLength = maxValue - minValue;
  return thisSlider.positionInPercent * (fieldLength / 100) + +minValue;
};

const calculateStepValueAndPosition = (thisSlider) => {
  const stepPosition = (
    Math.round(thisSlider.positionInPercent / thisSlider.step) * thisSlider.step
  ).toFixed(thisSlider.stepSignAfterComma);
  const stepValue = (Math.round(thisSlider.value / thisSlider.step) * thisSlider.step).toFixed(
    thisSlider.stepSignAfterComma,
  );
  return { stepPosition, stepValue };
};

export {
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  checkCollision,
};
