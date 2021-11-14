/* eslint-env jquery */

import SliderView from '../../SliderView';

type EventData = {
  thisView: SliderView;
};
function cancelDragging(event: JQuery.DragOverEvent): void {
  event.preventDefault();
  event.stopPropagation();
  const eventData = event.data as EventData;
  const { $field, isRange, $body } = eventData.thisView;
  const { runner } = eventData.thisView;

  $field.removeClass('tap');
  runner.$elements[0].removeClass('slider__runner_current');
  if (isRange) {
    eventData.thisView.runner.$elements[1].removeClass('slider__runner_current');
  }
  $body.off('mousemove touchmove');
  eventData.thisView.runner.updateZIndex(runner.activeInstance);
}

export default cancelDragging;
