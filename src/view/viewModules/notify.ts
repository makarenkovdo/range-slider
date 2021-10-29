import SliderView from '../SliderView';

const notify = function notifySubscribers(
  this: SliderView,
  cursorXY: number[],
  instance: number,
): void {
  this.subscriber.recieveUserAction(cursorXY, instance, this.fieldSize);
};

export default notify;
