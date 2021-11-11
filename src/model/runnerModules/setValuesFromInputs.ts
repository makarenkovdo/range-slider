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
  const rebuildData = {
    minValue: panelInputsData.minMax[0],
    maxValue?: panelInputsData.minMax[1],
    step: this.step,
    shouldAddTip: panelInputsData.hasTip,
    shouldAddBar: panelInputsData.hasBar,
    shouldAddScale: panelInputsData.hasScale,
    isRange: panelInputsData.isRange,
    runnerSize: panelInputsData.runnerSize,
    // fieldThickness?: number,
    // isTestMode?: boolean,
    isVertical: panelInputsData.isVertical,
    runnersInstantPosition: this.stepPosition,
  }
  this.notifyToRebuild.call(this, rebuildData);
};

export default setValuesFromInputs;
