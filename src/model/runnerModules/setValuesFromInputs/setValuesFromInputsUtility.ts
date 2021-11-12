import RunnerModel from '../../RunnerModel';
import { CalculateStepPositionFromInputReturned } from '../runnerInterfaces';

const calculateStepPositionFromInput = (
  inputValue: number,
  step:number,
  stepSignAfterComma:number,
  minMax: number[],
):CalculateStepPositionFromInputReturned => {
  const stepValue = Number((Math.round(inputValue / step) * step).toFixed(stepSignAfterComma));
  const stepPosition = Math.abs((stepValue - minMax[0]) / (minMax[1] - minMax[0])) * 100;
  return { stepPosition, stepValue };
};
const setValues = function setThisValuesFromInputs(
  this:RunnerModel,
  stepPosition:number, stepValue:number,
):void {
  this.stepPosition = stepPosition;
  this.stepValue = stepValue;
};

export { setValues, calculateStepPositionFromInput };
