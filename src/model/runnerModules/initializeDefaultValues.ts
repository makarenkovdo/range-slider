import RunnerModel from '../RunnerModel';
import { calculatePositionFromInput } from './setValuesFromInputs/setValuesFromInputsUtility';

const initializeDefaultValues = function initializeDefaultPositionAndValue(
  this: RunnerModel,
  minMax: number[],
  runnersInstantPosition: number,
): void {
  console.log('this.step / (minMax[1] - minMax[0]', this.step, minMax[1], minMax[0]);

  this.stepInPercent = (this.step / (minMax[1] - minMax[0])) * 100;

  this.setValuesFromInputs.call(
    this.instance,
    runnersInstantPosition,
    minMax,
  );
};

export default initializeDefaultValues;
