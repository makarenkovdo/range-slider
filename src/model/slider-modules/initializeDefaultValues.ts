import SliderModel from '../slider-model';

const initializeDefaultValues = function initializeDefaultPositionAndValue(
  this: SliderModel,
  minMax: number[],
): void {
  const minMaxStepPosition = [0, 100];
  this.positionInPercent = minMaxStepPosition[this.instance];
  this.value = minMax[this.instance];
  this.stepPosition = minMaxStepPosition[this.instance];
  this.stepValue = minMax[this.instance];
};

export default initializeDefaultValues;