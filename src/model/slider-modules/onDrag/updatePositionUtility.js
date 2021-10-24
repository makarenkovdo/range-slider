//  implementation of airbnb rule #7.12
const assignIfHasOwn = (obj, key, value) => {
  const newObj = Object.prototype.hasOwnProperty.call(obj, key) ? obj : false;
  newObj[key] = value;
};

const calculatePositionInPercent = (isVertical, thisSlider, offsetX, offsetY) => {
  const cursorXY = [offsetX, offsetY];

  if (isVertical) {
    const fieldHeight = thisSlider.$field[0].offsetHeight;
    return ((fieldHeight - (cursorXY[1] + 1)) * 100) / fieldHeight;
  }
  return ((cursorXY[0] + 5) * 100) / thisSlider.$field[0].offsetWidth;
};

// prettier-ignore
const checkCollision = ({ stepPosition, stepValue }, slider, thisSlider) => {
  const isCollisionFirst = () => (!thisSlider.isVertical && thisSlider.instance === 0
        && stepPosition - slider[1].stepPosition >= 0)
        || (thisSlider.isVertical && thisSlider.instance === 0
            && stepPosition - slider[1].stepPosition <= 0);

  // prettier-ignore
  const isCollisionSecond = () => (
    (!thisSlider.isVertical && thisSlider.instance === 1
        && stepPosition - slider[0].stepPosition <= 0)
        || (thisSlider.isVertical && thisSlider.instance === 0
          && stepPosition - slider[0].stepPosition >= 0)
  );

  if (isCollisionFirst()) {
    const a = { stepPosition: slider[1].stepPosition, stepValue: slider[1].stepValue };
    return a;
  // eslint-disable-next-line no-else-return
  } else if (isCollisionSecond()) {
    const a = { stepPosition: slider[0].stepPosition, stepValue: slider[0].stepValue };
    return a;
  } else {
    return { stepPosition, stepValue };
  }
};

const setStepValueAndPosition = (thisSlider, { stepPosition, stepValue }) => {
  assignIfHasOwn(thisSlider, 'stepPosition', stepPosition);
  assignIfHasOwn(thisSlider, 'stepValue', stepValue);
};

const calculateValue = (minValue, maxValue, thisSlider) => {
  const fieldLength = maxValue - minValue;
  return thisSlider.positionInPercent * (fieldLength / 100) + +minValue;
};

// prettier-ignore
const calculateStepValueAndPosition = ({
  positionInPercent,
  step,
  value,
  stepSignAfterComma,
}) => {
  const stepPosition = (Math.round(positionInPercent / step) * step).toFixed(stepSignAfterComma);
  const stepValue = (Math.round(value / step) * step).toFixed(stepSignAfterComma);
  return { stepPosition, stepValue };
};

const setPositionInPercent = (thisSlider, newPositionInPercent) => {
  assignIfHasOwn(thisSlider, 'positionInPercent', newPositionInPercent);
};

const setValue = (thisSlider, value) => {
  assignIfHasOwn(thisSlider, 'value', value);
};

export {
  checkCollision,
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  setStepValueAndPosition,
};
