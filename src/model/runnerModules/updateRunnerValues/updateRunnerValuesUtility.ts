import RunnerModel from '../../RunnerModel';

//  implementation of airbnb rule #7.12
// const assignIfHasOwn = (obj, key, value) => {
//   const newObj = Object.prototype.hasOwnProperty.call(obj, key) ? obj : false;
//   newObj[key] = value;
// };

type TKey = 'stepPosition' | 'stepValue' | 'value' | 'positionInPercent';
const assignIfHasOwn = (obj: RunnerModel, key: TKey, value: number) => {
  const newObj: RunnerModel = obj;
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    newObj[key] = value; // enum???
  }
};

const calculatePositionInPercent = (
  isVertical: boolean,
  thisRunner: RunnerModel,
  cursorXY: number[],
  fieldSize: number[],
): number => {
  let [cursorX, cursorY] = cursorXY;
  if (isVertical) {
    if (cursorY < 0) {
      cursorY = 0;
    }
    return ((fieldSize[1] - cursorY) * 100) / fieldSize[1];
  }
  if (cursorX < 0) {
    cursorX = 0;
  }

  return (cursorX * 100) / fieldSize[0];
};

type CheckCollisionSubargsType = {
  stepPosition: number;
  stepValue: number;
};

// prettier-ignore
const checkCollision = (
  { stepPosition, stepValue }:CheckCollisionSubargsType,
  runner:RunnerModel[],
  thisRunner:RunnerModel,
  isVertical:boolean,
):CheckCollisionSubargsType => {
  // const isCollisionZero = () => (thisRunner.instance === 0
  const isCollisionZero = () => (!isVertical && thisRunner.instance === 0
      && stepPosition - runner[1].stepPosition >= 0)
        // || (thisRunner && thisRunner.instance === 0 // thisRunner hasn't isVertical!!!
        || (isVertical && thisRunner.instance === 0 // thisRunner hasn't isVertical!
            && runner[1].stepPosition - stepPosition <= 0);

  // prettier-ignore
  const isCollisionOne = () => (
    (!isVertical && thisRunner.instance === 1
    // (thisRunner.instance === 1
        && stepPosition - runner[0].stepPosition <= 0)
        // || (thisRunner.instance === 0
        || (isVertical && thisRunner.instance === 1
            && runner[0].stepPosition - stepPosition >= 0)
  );

  if (isCollisionZero()) {
    const a = { stepPosition: runner[1].stepPosition, stepValue: runner[1].stepValue };
    return a;
  // eslint-disable-next-line no-else-return
  } else if (isCollisionOne()) {
    const a = { stepPosition: runner[0].stepPosition, stepValue: runner[0].stepValue };
    return a;
  } else {
    return { stepPosition, stepValue };
  }
};

const setStepValueAndPosition = (
  thisRunner: RunnerModel,
  { stepPosition, stepValue }: CheckCollisionSubargsType,
): void => {
  assignIfHasOwn(thisRunner, 'stepPosition', stepPosition);
  assignIfHasOwn(thisRunner, 'stepValue', stepValue);
};

const calculateValue = (minMax: number[], thisRunner: RunnerModel): number => {
  const fieldLength = minMax[1] - minMax[0];
  return thisRunner.positionInPercent * (fieldLength / 100) + +minMax[0];
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

const setPositionInPercent = (thisRunner: RunnerModel, newPositionInPercent: number): void => {
  assignIfHasOwn(thisRunner, 'positionInPercent', newPositionInPercent);
};

const setValue = (thisRunner: RunnerModel, value: number): void => {
  assignIfHasOwn(thisRunner, 'value', value);
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
