// import assignIfHasOwn from '../../utility/assignIfOwnHas';
import { DragEventDataType } from '../../viewInterfaces';
// import notify from './notify';

const prepareMovingCoordinates = (
  event: JQuery.ClickEvent,
  eventData: DragEventDataType,
): number[] => {
  const cursorXY = [
    event.pageX - eventData.thisView.$field.position().left - 5,
    event.pageY - eventData.thisView.$field.position().top - 5,
  ];
  let switcher = 0;
  if (eventData.thisView.isVertical) switcher = 1;
  if (cursorXY[switcher] < 0) {
    cursorXY[switcher] = 0;
  }
  if (cursorXY[switcher] > eventData.thisView.fieldSize[switcher]) {
    cursorXY[switcher] = eventData.thisView.fieldSize[switcher];
  }
  console.log(cursorXY, 'cursorXY');
  
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
