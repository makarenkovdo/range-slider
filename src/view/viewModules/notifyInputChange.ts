import SliderView from '../SliderView';

const notifyInputChange = function prepareDataAndNotifyInputChange(
  this: SliderView,
  runnersValue: number[],
): void {
  const panelInputsData = {

    isVertical: this.isVertical,
    minMax: this.minMax,
    isRange: this.isRange,
    // fieldThickness: this.fieldthickness,
    hasBar: this.hasBar,
    hasScale: this.hasScale,
    hasTip: this.hasTip,
    runnersValue,
    runnerSize: this.runnerSize,
  };
  console.log('panelInputsData', panelInputsData);

  this.subscriber.recieveInputsData(panelInputsData);
};

export default notifyInputChange;
