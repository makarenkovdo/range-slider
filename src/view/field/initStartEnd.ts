import SliderView from '../SliderView';

const initStartEnd = function createFieldStartEndAndInitMinMax(
  this: SliderView,
  minValue: number,
  maxValue: number,
): void {
  // this.$field.attr('data-start', minValue);
  // this.$field.attr('data-end', maxValue);
  this.minMax = [minValue, maxValue];
  console.log(this);
};

export default initStartEnd;
