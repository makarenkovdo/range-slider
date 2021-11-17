import RunnerModel from '../../RunnerModel';
import {
  AssignIfHasOwnKeys,
  CalculateStepValueAndPositionArgs,
  CheckCollisionSubargs,
} from '../runnerInterfaces';

//  implementation of airbnb rule #7.12
const assignIfHasOwn = (obj: RunnerModel, key: AssignIfHasOwnKeys, value: number) => {
  const newObj: RunnerModel = obj;
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    newObj[key] = value;
  }
};

const calculatePositionInPercent = (
  isVertical: boolean,
  thisRunner: RunnerModel,
  cursorXY: number[],
  fieldSize: number[],
): number => {
  let [cursorX, cursorY] = cursorXY;
  let positionInPercent = 0;

  if (isVertical) {
    if (cursorY < 0) {
      cursorY = 0;
    }
    positionInPercent = ((fieldSize[1] - cursorY) * 100) / (fieldSize[1]);
  } else {
    if (cursorX < 0) {
      cursorX = 0;
    }
    positionInPercent = ((cursorX) * 100) / (fieldSize[0]);
  }

  return positionInPercent;
};

const checkCollision = (
  { stepPosition, stepValue }:CheckCollisionSubargs,
  runner:RunnerModel[],
  thisRunner:RunnerModel,
  isVertical:boolean,
):CheckCollisionSubargs => {
  const isCollisionZero = () => (!isVertical && thisRunner.instance === 0
      && stepPosition - runner[1].stepPosition >= 0)
        || (isVertical && thisRunner.instance === 0
            && runner[1].stepPosition - stepPosition <= 0);

  const isCollisionOne = () => (
    (!isVertical && thisRunner.instance === 1
        && stepPosition - runner[0].stepPosition <= 0)
        || (isVertical && thisRunner.instance === 1
            && runner[0].stepPosition - stepPosition >= 0)
  );

  if (isCollisionZero()) {
    const a = { stepPosition: runner[1].stepPosition, stepValue: runner[1].stepValue };
    return a;
  } if (isCollisionOne()) {
    const a = { stepPosition: runner[0].stepPosition, stepValue: runner[0].stepValue };
    return a;
  }
  return { stepPosition, stepValue };
};

const setStepValueAndPosition = (
  thisRunner: RunnerModel,
  { stepPosition, stepValue }: CheckCollisionSubargs,
): void => {
  assignIfHasOwn(thisRunner, 'stepPosition', stepPosition);
  assignIfHasOwn(thisRunner, 'stepValue', stepValue);
};

const calculateValue = (minMax: number[], thisRunner: RunnerModel): number => {
  const fieldLength = minMax[1] - minMax[0];
  return thisRunner.positionInPercent * (fieldLength / 100) + +minMax[0];
};

const calculateStepValueAndPosition = ({
  positionInPercent,
  step,
  stepInPercent,
  value,
  stepSignAfterComma,
}:CalculateStepValueAndPositionArgs,
minMax: number[]):CheckCollisionSubargs => {
  let divisionQuantity = 0;
  function checkOnException() {
    return Math.floor((minMax[1] - minMax[0]) / step) * step === (minMax[1] - minMax[0]);
  }
  if (checkOnException()) divisionQuantity = (minMax[1] - minMax[0]) / step;
  else divisionQuantity = Math.floor((minMax[1] - minMax[0]) / step) + 1;
  const divisionSizeInPercent = 100 / divisionQuantity;

  let stepPosition = Number((Math.round(positionInPercent / stepInPercent) * (stepInPercent))
    .toFixed(stepSignAfterComma));
  const stepValueMultiplier = Math.floor(stepPosition / divisionSizeInPercent);
  let stepValue = Number((minMax[0] + step * stepValueMultiplier).toFixed(stepSignAfterComma));

  if (!checkOnException() && (value === minMax[1] || stepValueMultiplier === divisionQuantity)) {
    stepPosition = 100;
    // eslint-disable-next-line prefer-destructuring
    stepValue = minMax[1];
  }
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
