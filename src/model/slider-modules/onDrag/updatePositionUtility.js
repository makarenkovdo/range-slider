//  implementation of airbnb rule #7.12
const assignIfHasOwn = (obj, key, value) => {
  const newObj = Object.prototype.hasOwnProperty.call(obj, key) ? obj : false;
  newObj[key] = value;
};

// prettier-ignore
const checkCollision = ([stepPosition, stepValue ], slider, thisSlider) => {
  const isCollisionFirst = () =>
    (!thisSlider.isVertical && thisSlider.instance === 0
        && stepPosition - slider[1].stepPosition >= thisSlider.step)
        || (thisSlider.isVertical && thisSlider.instance === 0
            && stepPosition - slider[1].stepPosition <= thisSlider.step);

  // prettier-ignore
  const isCollisionSecond = () => (
    (!thisSlider.isVertical && thisSlider.instance === 1
        && stepPosition - slider[0].stepPosition <= thisSlider.step)
        || (thisSlider.isVertical && thisSlider.instance === 0
          && stepPosition - slider[0].stepPosition >= thisSlider.step)
  );

  if (isCollisionFirst()) {
    return [+slider[1].stepPosition - thisSlider.step, +slider[1].stepValue - thisSlider.step]
  // eslint-disable-next-line no-else-return
  } else if (isCollisionSecond()) {
    return [+slider[0].stepPosition + thisSlider.step, +slider[0].stepValue + thisSlider.step]
  } else {
     return [stepPosition, stepValue];
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

const calculateValue = (minValue, maxValue, thisSlider) => {
  const fieldLength = maxValue - minValue;
  return thisSlider.positionInPercent * (fieldLength / 100) + +minValue;
};

const calculateStepValueAndPosition = ({ positionInPercent, step, value, stepSignAfterComma }) => {
  const stepPosition = (Math.round(positionInPercent / step) * step).toFixed(stepSignAfterComma);
  const stepValue = (Math.round(value / step) * step).toFixed(stepSignAfterComma);
  return [stepPosition, stepValue];
};

const setPositionInPercent = (thisSlider, newPositionInPercent) => {
  assignIfHasOwn(thisSlider, 'positionInPercent', newPositionInPercent);
};

const setValue = (thisSlider, value) => {
  assignIfHasOwn(thisSlider, 'value', value);
};

const setStepValueAndPosition = (thisSlider, values) => {
  console.log(thisSlider, values);
  const [stepPosition, stepValue] = values;
  assignIfHasOwn(thisSlider, 'stepPosition', stepPosition);
  assignIfHasOwn(thisSlider, 'stepValue', stepValue);
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
