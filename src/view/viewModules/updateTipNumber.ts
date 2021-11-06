import SliderView from '../SliderView';
import { UpdateTipNumberArgs } from '../viewInterfaces';

const updateTipNumber = function updateTipNumberAtDOM(
  this: SliderView,
  { stepValue, instance }: UpdateTipNumberArgs,
): void {
  this.$field.find(`.js-slider__tip_instance-${instance} span`).text(`${stepValue}`);
  this.$field.find(`.js-slider__tip_instance-${instance}`).css('left', `${this.runnersPosition[instance]}%`);

};

export default updateTipNumber;
