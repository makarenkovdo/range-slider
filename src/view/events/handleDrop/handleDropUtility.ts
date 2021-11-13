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
  eventData.thisView.$runners[0].removeClass('slider__runner_current');
  if (eventData.thisView.isRange) {
    eventData.thisView.$runners[1].removeClass('slider__runner_current');
  }
  eventData.thisView.$body.off('mousemove touchmove');
  eventData.thisView.updateZIndex(eventData.thisView.activeInstance);
}

export default cancelDragging;
