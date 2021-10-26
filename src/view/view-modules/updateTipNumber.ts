import SliderView from '../slider-view';
import { UpdateTipNumberArgs } from '../viewInterfaces';

const updateTipNumber = function updateTipNumberAtDOM(
  this: SliderView,
  { stepValue, instance }: UpdateTipNumberArgs,
): void {
  this.$field.find(`.instance-${instance} span`).text(`${stepValue}`);
};

export default updateTipNumber;
