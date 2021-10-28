import SliderModel from '../../slider-model';

//  implementation of airbnb rule #7.12
// const assignIfHasOwn = (obj, key, value) => {
//   const newObj = Object.prototype.hasOwnProperty.call(obj, key) ? obj : false;
//   newObj[key] = value;
// };

type TKey = 'stepPosition' | 'stepValue' | 'value' | 'positionInPercent';
const assignIfHasOwn = (obj: SliderModel, key: TKey, value: number) => {
  const newObj: SliderModel = obj;
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    newObj[key] = value; // enum???
  }
};

const calculatePositionInPercent = (
  isVertical: boolean,
  thisSlider: SliderModel,
  offsetX: number,
  offsetY: number,
): number => {
  const cursorXY = [offsetX, offsetY];

  if (isVertical) {
    const fieldHeight = thisSlider.$field[0].offsetHeight;
    return ((fieldHeight - (cursorXY[1] + 1)) * 100) / fieldHeight;
  }
  return ((cursorXY[0] + 5) * 100) / thisSlider.$field[0].offsetWidth;
};

type CheckCollisionSubargsType = {
  stepPosition: number;
  stepValue: number;
};

// prettier-ignore
const checkCollision = (
  { stepPosition, stepValue }:CheckCollisionSubargsType,
  slider:SliderModel[],
  thisSlider:SliderModel,
  isVertical:boolean,
):CheckCollisionSubargsType => {
  // const isCollisionZero = () => (thisSlider.instance === 0
  const isCollisionZero = () => (!isVertical && thisSlider.instance === 0
      && stepPosition - slider[1].stepPosition >= 0)
        // || (thisSlider && thisSlider.instance === 0 // thisSlider hasn't isVertical!!!
        || (isVertical && thisSlider.instance === 0 // thisSlider hasn't isVertical!
            && slider[1].stepPosition - stepPosition <= 0);

  // prettier-ignore
  const isCollisionOne = () => (
    (!isVertical && thisSlider.instance === 1
    // (thisSlider.instance === 1
        && stepPosition - slider[0].stepPosition <= 0)
        // || (thisSlider.instance === 0
        || (isVertical && thisSlider.instance === 1
            && slider[0].stepPosition - stepPosition >= 0)
  );

  if (isCollisionZero()) {
    const a = { stepPosition: slider[1].stepPosition, stepValue: slider[1].stepValue };
    return a;
  // eslint-disable-next-line no-else-return
  } else if (isCollisionOne()) {
    const a = { stepPosition: slider[0].stepPosition, stepValue: slider[0].stepValue };
    return a;
  } else {
    return { stepPosition, stepValue };
  }
};

const setStepValueAndPosition = (
  thisSlider: SliderModel,
  { stepPosition, stepValue }: CheckCollisionSubargsType,
): void => {
  assignIfHasOwn(thisSlider, 'stepPosition', stepPosition);
  assignIfHasOwn(thisSlider, 'stepValue', stepValue);
};

const calculateValue = (minValue: number, maxValue: number, thisSlider: SliderModel): number => {
  const fieldLength = maxValue - minValue;
  return thisSlider.positionInPercent * (fieldLength / 100) + +minValue;
};

type CalculateStepValueAndPositionArgsType = {
  positionInPercent: number;
  step: number;
  value: number;
  stepSignAfterComma: number;
};

// prettier-ignore
const calculateStepValueAndPosition = ({
  positionInPercent,
  step,
  value,
  stepSignAfterComma,
}:CalculateStepValueAndPositionArgsType):CheckCollisionSubargsType => {
  const stepPosition = Number((Math.round(positionInPercent / step) * step)
    .toFixed(stepSignAfterComma));
  const stepValue = Number((Math.round(value / step) * step).toFixed(stepSignAfterComma));
  return { stepPosition, stepValue };
};

const setPositionInPercent = (thisSlider: SliderModel, newPositionInPercent: number): void => {
  assignIfHasOwn(thisSlider, 'positionInPercent', newPositionInPercent);
};

const setValue = (thisSlider: SliderModel, value: number): void => {
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