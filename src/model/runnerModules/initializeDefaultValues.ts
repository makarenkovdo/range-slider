import RunnerModel from '../RunnerModel';
import { calculatePositionFromInput } from './setValuesFromInputs/setValuesFromInputsUtility';

const initializeDefaultValues = function initializeDefaultPositionAndValue(
  this: RunnerModel,
  minMax: number[],
  runnersInstantPosition: number,
): void {
  console.log('minMax', minMax);
  
  console.log('runnersInstantPosition', runnersInstantPosition);
  
  this.setValuesFromInputs.call(
    this.instance,
    runnersInstantPosition,
    minMax,
  );
  console.log('CHECK2!!!', this.stepPosition, this.stepValue);
  const { stepValue, stepPosition } = this;
  console.log('CHECK3123', stepPosition, stepValue);
};

export default initializeDefaultValues;
