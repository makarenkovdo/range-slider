import SliderView from '../slider-view';

const updateTipNumber = function updateTipNumberAtDOM(
  this: SliderView,
  stepValue: number,
  instance: number,
): void {
  this.$field.find(`.instance-${instance} span`).text(`${stepValue}`);
};

export default updateTipNumber;
