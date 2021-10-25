/* eslint-env jquery */

type EventData = {
  $field: JQuery<HTMLElement>;
};
function cancelDragging(event: JQuery.DragOverEvent) {
  event.preventDefault();
  event.stopPropagation();
  const eventData = event.data as EventData;
  eventData.$field.removeClass('tap');
  eventData.$field.off('mousemove touchmove');
}
const activateOnDropListener = ($field: JQuery<HTMLElement>): void => {
  $field.on('mouseup touchend', { $field }, cancelDragging);
  $('body').on('mouseup touchend', { $field }, cancelDragging);
};

export default activateOnDropListener;
