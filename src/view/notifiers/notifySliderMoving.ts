import SliderView from '../SliderView';

const notifySliderMoving = function notifySubscribers(
  this: SliderView,
  cursorXY: number[],
  instance: number,
): void {
  this.subscriber.recieveDragData(this, cursorXY, instance);
};

export default notifySliderMoving;
