import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import Panel from './Panel';

const notifyInputChange = function prepareDataAndNotifyInputChange(
  this: Panel,
  runnersPosition: number[],
): void {
  console.log(runnersPosition);
  
  const newVar:PresenterBuildParams = {
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
  console.log(newVar, 'panelInputsData');

  this.parent.subscriber.recieveInputsData(newVar);
};

export default notifyInputChange;
