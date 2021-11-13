import { UpdateTipNumberArgs } from '../viewInterfaces';
import Tip from './Tip';

const update = function updateTipNumberAtDOM(
  this: Tip,
  { stepValue, instance }: UpdateTipNumberArgs,
): void {
  const {
    $field, fieldSize, isVertical, runner,
  } = this.parent;

  const positioning = isVertical ? 'top' : 'left';
  const viewPosition = isVertical
    ? fieldSize[1] - (runner.positions[instance] * (fieldSize[1] / 100)) - 10
    : ((runner.positions[instance] * (fieldSize[0] / 100)) - 20);
  $field.find(`.js-slider__tip_instance-${instance} span`).text(`${stepValue}`);
  $field.find(`.js-slider__tip_instance-${instance}`).css(positioning, `${viewPosition}px`);
};

export default update;
