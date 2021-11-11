import RunnerModel from '../RunnerModel';
import { NotifyMessageType } from './runnerInterfaces';
import { calculateStepPositionFromInput, setValues } from './setValuesFromInputs/setValuesFromInputsUtility';

const setValuesFromInputs = function setThisValuesFromPanelInputs(
  this:RunnerModel, inputValue:number, minMax:number[],
):void {
  setValues.call(
    this,
    calculateStepPositionFromInput(inputValue, this.step, this.stepSignAfterComma, minMax),
  );
  const messageType: NotifyMessageType = 'rebuildData';
  this.notify(this, messageType);
};

export default setValuesFromInputs;
