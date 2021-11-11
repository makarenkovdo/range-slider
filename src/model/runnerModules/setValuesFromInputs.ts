import { PanelInputsData } from '../../view/viewInterfaces';
import RunnerModel from '../RunnerModel';
import { NotifyMessageType } from './runnerInterfaces';
import { calculateStepPositionFromInput, setValues } from './setValuesFromInputs/setValuesFromInputsUtility';

const setValuesFromInputs = function setThisValuesFromPanelInputs(
  this:RunnerModel, panelInputsData:PanelInputsData,
):void {
  setValues.call(
    this,
    calculateStepPositionFromInput(
      panelInputsData.runnersValue[this.instance],
      this.step,
      this.stepSignAfterComma,
      panelInputsData.minMax,
    ),
  );
  const messageType: NotifyMessageType = 'rebuildData';
  this.notifyToRebuild(this, messageType);
};

export default setValuesFromInputs;
