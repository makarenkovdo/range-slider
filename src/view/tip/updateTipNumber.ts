import SliderView from '../SliderView';
import { UpdateTipNumberArgs } from '../viewInterfaces';

const updateTipNumber = function updateTipNumberAtDOM(
  this: SliderView,
  { stepValue, instance }: UpdateTipNumberArgs,
): void {
  const positioning = this.isVertical ? 'top' : 'left';
  const viewPosition = this.isVertical
    ? this.fieldSize[1] - (this.runnersPosition[instance] * (this.fieldSize[1] / 100)) - 10
    : ((this.runnersPosition[instance] * (this.fieldSize[0] / 100)) - 20);
  this.$field.find(`.js-slider__tip_instance-${instance} span`).text(`${stepValue}`);
  this.$field.find(`.js-slider__tip_instance-${instance}`).css(positioning, `${viewPosition}px`);
};

export default updateTipNumber;
