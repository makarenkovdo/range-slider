// import assignIfHasOwn from '../../utility/assignIfOwnHas';
import SliderView from '../../SliderView';
import { DragEventDataType } from '../../viewInterfaces';
// import notify from './notify';

const prepareMovingCoordinates = (
  event: JQuery.ClickEvent,
  eventData: DragEventDataType,
): number[] => {
  const cursorXY = [
    event.pageX - eventData.thisView.$field.position().left,
    event.pageY - eventData.thisView.$field.position().top,
  ];
  if (cursorXY[0] < 0) {
    cursorXY[0] = 0;
  }
  if (cursorXY[0] > eventData.thisView.fieldSize[0]) {
    console.log(eventData.thisView.fieldSize[0]);
    cursorXY[0] = eventData.thisView.fieldSize[0];
  }
  return cursorXY;
};

const notifySubscriber = (event: JQuery.ClickEvent): void => {
  // event.preventDefault();
  // event.stopPropagation();
  const eventData = event.data as DragEventDataType;
  const cursorXY = prepareMovingCoordinates(event, eventData);
  eventData.thisView.notifySliderMoving(cursorXY, eventData.instance);
};

export default notifySubscriber;
