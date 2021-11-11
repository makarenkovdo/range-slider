import RunnerModel from '../../RunnerModel';
import { CalculateStepPositionFromInputReturned } from '../runnerInterfaces';

const calculateStepPositionFromInput = (
  inputValue: number,
  step:number,
  stepSignAfterComma:number,
  minMax: number,
):CalculateStepPositionFromInputReturned => {
  const stepValue = Number((Math.round(inputValue / step) * step).toFixed(stepSignAfterComma));
  const stepPosition = stepValue / minMax[1];
  return { stepPosition, stepValue };
};
const setValues = function setThisValuesFromInputs(
  this:RunnerModel,
  { stepPosition, stepValue }:CalculateStepPositionFromInputReturned,
):void {
  this.stepPosition = stepPosition;
  this.stepValue = stepValue;
};

export { setValues, calculateStepPositionFromInput };
