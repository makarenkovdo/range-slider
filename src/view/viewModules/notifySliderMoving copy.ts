import SliderView from '../SliderView';

const notifySliderMoving = function notifySubscribers(
  this: SliderView,

): void {
  this.subscriber.recieveInputsData(panel);
};

export default notifySliderMoving;
