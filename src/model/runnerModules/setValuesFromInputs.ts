import RunnerModel from '../RunnerModel';
import { CalculateStepPositionFromInputReturned } from './runnerInterfaces';
import {
  calculatePositionFromInput, setPrepareValues, setStepValues,
} from './setValuesFromInputs/setValuesFromInputsUtility';
import { calculateStepValueAndPosition } from './updateRunnerValues/updateRunnerValuesUtility';

const setValuesFromInputs = function setThisValuesFromPanelInputs(
  this:RunnerModel,
  inputRunnerValue:number,
  minMax: number[],
):CalculateStepPositionFromInputReturned {
  const positionInPercent = calculatePositionFromInput(
    inputRunnerValue,
    minMax,
  );
  setPrepareValues.call(this, positionInPercent, inputRunnerValue);
  const { stepValue, stepPosition } = calculateStepValueAndPosition(this, minMax);

  setStepValues.call(
    this,
    stepPosition,
    stepValue,
  );
  return { stepValue, stepPosition };
};

export default setValuesFromInputs;
