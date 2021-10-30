import SliderView from '../SliderView';
import { UpdateTipNumberArgs } from '../viewInterfaces';

const updateTipNumber = function updateTipNumberAtDOM(
  this: SliderView,
  { stepValue, instance }: UpdateTipNumberArgs,
): void {
  this.$field.find(`.js-instance-${instance} span`).text(`${stepValue}`);
};

export default updateTipNumber;
