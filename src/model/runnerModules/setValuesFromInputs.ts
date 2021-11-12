import { PanelInputsData } from '../../view/viewInterfaces';
import RunnerModel from '../RunnerModel';
import { CalculateStepPositionFromInputReturned, NotifyMessageType } from './runnerInterfaces';
import { calculateStepPositionFromInput, setValues } from './setValuesFromInputs/setValuesFromInputsUtility';

const setValuesFromInputs = function setThisValuesFromPanelInputs(
  this:RunnerModel,
  inputRunnerValue:number,
  minMax: number[],
):CalculateStepPositionFromInputReturned {
  console.log(inputRunnerValue, 'inputRunnerValue');

  const { stepValue, stepPosition } = calculateStepPositionFromInput(
    inputRunnerValue,
    this.step,
    this.stepSignAfterComma,
    minMax,
  );

  setValues.call(
    this,
    stepValue,
    stepPosition,
  );
  return { stepValue, stepPosition };
  // this.notifyToRebuild.call(this.stepPosition, this.stepValue);
};

export default setValuesFromInputs;
