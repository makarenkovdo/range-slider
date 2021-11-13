import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import SliderView from '../SliderView';

const notifyInputChange = function prepareDataAndNotifyInputChange(
  this: SliderView,
  runnersInstantPosition: number[],
): void {
  console.log(this);
  
  const panelInputsData:PresenterBuildParams = {

    orientation: this.isVertical ? 'vertical' : 'horizontal',
    minValue: this.minMax[0],
    maxValue: this.minMax[1],
    isRange: this.isRange,
    // fieldThickness: this.fieldthickness,
    shouldAddBar: this.hasBar,
    shouldAddScale: this.hasScale,
    shouldAddTip: this.hasTip,
    runnersInstantPosition,
    runnerSize: this.runnerSize,
    step: this.step,
  };
  this.subscriber.recieveInputsData(panelInputsData);
};

export default notifyInputChange;
