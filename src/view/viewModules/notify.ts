import SliderView from '../SliderView';

const notify = function notifySubscribers(this: SliderView): void {
  this.subscriber.recieveUserAction(this);
};

export default notify;
