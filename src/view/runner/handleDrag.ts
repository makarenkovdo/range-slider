import notifySubscriber from './handleDrag/handleDragUtility';
import Runner from './Runner';

const handleDrag = function activateOnDragListenerAndNotify(
  this: Runner,
  instance: number,
): void {
  const { $field, $body } = this.parent;
  $field.on('mousedown touchstart', `.js-slider__runner_instance-${instance}`, (event: JQuery.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    $field.addClass('tap');
    $body.on('mousemove touchmove', { thisRunner: this, instance }, notifySubscriber);
  });
};
export default handleDrag;
