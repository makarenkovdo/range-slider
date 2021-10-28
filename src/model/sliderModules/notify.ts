import RunnerModel from '../RunnerModel';

const notify = function notifySubscribers(this: RunnerModel): void {
  this.subscriber.recieve(this);
};

export default notify;
