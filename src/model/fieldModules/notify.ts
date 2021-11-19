import RunnerModel from '../RunnerModel';

const notify = function notifySubscribersToRecieveModelLogic(this: RunnerModel): void {
  this.subscriber.recieveModelLogic(this);
};

export default notify;
