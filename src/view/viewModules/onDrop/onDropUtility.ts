/* eslint-env jquery */

type EventData = {
  $field: JQuery<HTMLElement>;
};
function cancelDragging(event: JQuery.DragOverEvent): void {
  event.preventDefault();
  event.stopPropagation();
  const eventData = event.data as EventData;
  eventData.$field.removeClass('tap');
  eventData.$field.off('mousemove touchmove');
}

export default cancelDragging;
