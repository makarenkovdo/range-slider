import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import Panel from './Panel';

const notifyInputChange = function prepareDataAndNotifyInputChange(
  this: Panel,
  runnersInstantPosition: number[],
): void {
  
  const panelInputsData:PresenterBuildParams = {
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
  this.parent.subscriber.recieveInputsData(panelInputsData);
};

export default notifyInputChange;
