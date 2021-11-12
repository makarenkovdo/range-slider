import RunnerModel from '../RunnerModel';
import { calculateStepPositionFromInput } from './setValuesFromInputs/setValuesFromInputsUtility';

const initializeDefaultValues = function initializeDefaultPositionAndValue(
  this: RunnerModel,
  minMax: number[],
  runnersInstantPosition: number[],
): void {
  // const minMaxStepPosition = [0, 100];
  const { stepPosition, stepValue } = calculateStepPositionFromInput(
    runnersInstantPosition[this.instance],
    this.step,
    this.stepSignAfterComma,
    minMax,
  );
  this.positionInPercent = stepPosition;
  this.value = stepValue;
  this.stepPosition = stepPosition;
  this.stepValue = stepValue;
};

export default initializeDefaultValues;
