import { BuildParams } from '../../initializeTypes';
import Panel from './Panel';

const notifyInputChange = function prepareDataAndNotifyInputChange(
  this: Panel,
): void {
  const panelInputsData:BuildParams = {
    orientation: this.orientation,
    minValue: this.minMax[0],
    maxValue: this.minMax[1],
    isRange: this.isRange,
    fieldThickness: this.fieldThickness,
    shouldAddBar: this.hasBar,
    shouldAddScale: this.hasScale,
    shouldAddTip: this.hasTip,
    runnersInstantPosition: this.runnersPosition,
    runnerSize: this.runnerSize,
    step: this.step,
  };
  this.parent.rebuild(panelInputsData);
};

export default notifyInputChange;
