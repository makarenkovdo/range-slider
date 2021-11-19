import SliderView from '../SliderView';

const initStartEnd = function createFieldStartEndAndInitMinMax(
  this: SliderView,
  minValue: number,
  maxValue: number,
): void {
  this.minMax = [minValue, maxValue];
};

export default initStartEnd;
