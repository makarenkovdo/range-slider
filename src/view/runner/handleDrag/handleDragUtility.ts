import { DragEventDataType } from '../../viewInterfaces';

const prepareMovingCoordinates = (
  event: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent,
  eventData: DragEventDataType,
): number[] => {
  const { $field, fieldSize, isVertical } = eventData.thisRunner.parent;
  let cursorXY = [0, 0];
  if (event.pageX && event.pageY) {
    cursorXY = [
      event.pageX - $field.position().left - 5,
      event.pageY - $field.position().top - 5,
    ];
  }
  let switcher = 0;
  if (isVertical) switcher = 1;
  if (cursorXY[switcher] < 0) {
    cursorXY[switcher] = 0;
  }
  if (cursorXY[switcher] > fieldSize[switcher]) {
    cursorXY[switcher] = fieldSize[switcher];
  }
  return cursorXY;
};

const notifySubscriber = (event: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent): void => {
  event.preventDefault();
  event.stopPropagation();
  const eventData = event.data as DragEventDataType;
  const cursorXY = prepareMovingCoordinates(event, eventData);
  eventData.thisRunner.notifySliderMoving(cursorXY, eventData.instance);
};

export default notifySubscriber;
