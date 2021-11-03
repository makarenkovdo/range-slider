/* eslint-env jquery */

import SliderView from '../../SliderView';

type EventData = {
  thisView: SliderView;
};
function cancelDragging(event: JQuery.DragOverEvent): void {
  event.preventDefault();
  event.stopPropagation();
  const eventData = event.data as EventData;
  eventData.thisView.$field.removeClass('tap');
  eventData.thisView.$runners[0].removeClass('current');
  eventData.thisView.$runners[1].removeClass('last');
  eventData.thisView.$runners[0].removeClass('last');
  eventData.thisView.$runners[1].removeClass('current ');
  $('body').off('mousemove touchmove');
  eventData.thisView.updateZIndex(eventData.thisView.activeInstance);
}

export default cancelDragging;
