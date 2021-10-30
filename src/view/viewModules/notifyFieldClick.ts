import SliderView from '../SliderView';

const notifyFieldClick = function notifySubscriberAboutClick(
  this: SliderView,
  cursorXY: number[],
): void {
  console.log(this, cursorXY);

  this.subscriber.recieveClickData(this, cursorXY);
};

export default notifyFieldClick;
