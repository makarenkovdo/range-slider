// import assignIfHasOwn from '../../utility/assignIfOwnHas';
import SliderView from '../../SliderView';
import { DragEventDataType } from '../../viewInterfaces';
// import notify from './notify';

const prepareMovingCoordinates = (
  event: JQuery.ClickEvent,
  eventData: DragEventDataType,
): number[] => {
  const cursorXY = [
    event.pageX - eventData.thisView.$field.position().left-20,
    event.pageY - eventData.thisView.$field.position().top-20,
  ];
  let switcher = 0;
  if (eventData.thisView.isVertical) switcher = 1;
  if (cursorXY[switcher] < 0) {
    cursorXY[switcher] = 0;
  }
  if (cursorXY[switcher] > eventData.thisView.fieldSize[switcher]) {
    cursorXY[switcher] = eventData.thisView.fieldSize[switcher];
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
