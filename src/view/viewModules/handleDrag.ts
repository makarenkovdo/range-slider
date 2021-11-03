import SliderView from '../SliderView';
import notifySubscriber from './handleDrag/handleDragUtility';

const handleDrag = function activateOnDragListenerAndNotify(
  this: SliderView,
  instance: number,
): void {
  this.$field.on('mousedown touchstart', `.js-instance-${instance}`, (event: JQuery.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.$field.addClass('tap');
    $('body').on('mousemove touchmove', { thisView: this, instance }, notifySubscriber);
  });
};
export default handleDrag;
