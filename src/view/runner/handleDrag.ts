import notifySubscriber from './handleDrag/handleDragUtility';
import Runner from './Runner';

const handleDrag = function activateOnDragListenerAndNotify(
  this: Runner,
  instance: number,
): void {
  const { $field, $body } = this.parent;
  $field.on('mousedown', `.js-slider__runner_instance-${instance}`, (event: JQuery.MouseDownEvent) => {
    event.preventDefault();
    event.stopPropagation();
    $field.addClass('tap');
    $body.on('mousemove', { thisRunner: this, instance }, notifySubscriber);
  });
  $field.on('touchstart', `.js-slider__runner_instance-${instance}`, (event: JQuery.TouchStartEvent) => {
    event.preventDefault();
    event.stopPropagation();
    $field.addClass('tap');
    $body.on('touchmove', { thisRunner: this, instance }, notifySubscriber);
  });
};
export default handleDrag;
