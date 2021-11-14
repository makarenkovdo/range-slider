import Runner from './Runner';

const notifySliderMoving = function notifySubscribers(
  this: Runner,
  cursorXY: number[],
  instance: number,
): void {
  this.parent.subscriber.recieveDragData(this.parent, cursorXY, instance);
};

export default notifySliderMoving;
