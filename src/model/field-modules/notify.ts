import SliderModel from '../slider-model';

const notify = function notifySubscribers(this: SliderModel): void {
  this.subscriber.recieve(this);
};

export default notify;
