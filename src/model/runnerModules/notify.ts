import RunnerModel from '../RunnerModel';

const notify = function notifySubscribers(this: RunnerModel): void {
  this.subscriber.recieveModelLogic(this);
};

export default notify;
