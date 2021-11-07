import SliderView from '../SliderView';
import { UpdateTipNumberArgs } from '../viewInterfaces';

const updateTipNumber = function updateTipNumberAtDOM(
  this: SliderView,
  { stepValue, instance }: UpdateTipNumberArgs,
): void {
  const positioning = this.isVertical ? 'top' : 'left';
  const viewPosition = this.isVertical ? 100 - this.runnersPosition[instance] : this.runnersPosition[instance];
  const switcher = this.isVertical ? 1 - instance : instance;
  this.$field.find(`.js-slider__tip_instance-${instance} span`).text(`${stepValue}`);
  this.$field.find(`.js-slider__tip_instance-${instance}`).css(positioning, `${viewPosition}%`);
};

export default updateTipNumber;
