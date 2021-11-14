import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import Panel from './Panel';

const notifyInputChange = function prepareDataAndNotifyInputChange(
  this: Panel,
  runnersInstantPosition: number[],
): void {
  const { parent } = this;
  const panelInputsData:PresenterBuildParams = {
    orientation: parent.orientation,
    minValue: parent.minMax[0],
    maxValue: parent.minMax[1],
    isRange: parent.isRange,
    // fieldThickness: this.fieldthickness,
    shouldAddBar: parent.hasBar,
    shouldAddScale: parent.hasScale,
    shouldAddTip: parent.hasTip,
    runnersInstantPosition,
    runnerSize: parent.runner.size,
    step: parent.runner.step,
  };
  parent.subscriber.recieveInputsData(panelInputsData);
};

export default notifyInputChange;
