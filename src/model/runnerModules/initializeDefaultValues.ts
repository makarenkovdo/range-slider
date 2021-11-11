import RunnerModel from '../RunnerModel';
import { calculateStepPositionFromInput } from './setValuesFromInputs/setValuesFromInputsUtility';

const initializeDefaultValues = function initializeDefaultPositionAndValue(
  this: RunnerModel,
  minMax: number[],
  runnersInstantPosition: number[],
): void {
  const minMaxStepPosition = [0, 100];
  calculateStepPositionFromInput(
    runnersInstantPosition[this.instance],
    this.step,
    this.stepSignAfterComma,
    minMax,
  );
  this.positionInPercent = minMaxStepPosition[this.instance];
  this.value = minMax[this.instance];
  this.stepPosition = minMaxStepPosition[this.instance];
  this.stepValue = minMax[this.instance];
};

export default initializeDefaultValues;
