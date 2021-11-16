import RunnerModel from '../../RunnerModel';
// import { CalculateStepPositionFromInputReturned } from '../runnerInterfaces';

const calculatePositionFromInput = (
  inputValue: number,
  step:number,
  stepSignAfterComma:number,
  minMax: number[],
):number => {
  // const stepValue = Number((Math.round(inputValue / step) * step).toFixed(stepSignAfterComma));
  const positionInPercent = Math.abs((inputValue - minMax[0]) / (minMax[1] - minMax[0])) * 100;
  return positionInPercent;
};
const setPrepareValues = function setValueAndPositionInPercent(
  this:RunnerModel,
  positionInPercent:number, value:number,
):void {
  this.positionInPercent = positionInPercent;
  this.value = value;
};

const setStepValues = function setStepValueAndPosition(
  this:RunnerModel,
  stepPosition:number, stepValue:number,
):void {
  this.stepPosition = stepPosition;
  this.stepValue = stepValue;
};

export { setPrepareValues, setStepValues, calculatePositionFromInput };
