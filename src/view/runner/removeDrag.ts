import Runner from './Runner';

const removeDrag = function removeDragBeforeRebuild(
  this: Runner,
  instance: number,
): void {
  const { $field } = this.parent;
  $field.off('mousedown touchstart', `.js-slider__runner_instance-${instance}`);
};
export default removeDrag;
