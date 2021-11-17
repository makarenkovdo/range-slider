import RunnerModel from '../RunnerModel';

const notifyToUpdate = function notifySubscribersToUpdate(this: RunnerModel): void {
  this.subscriber.recieveModelLogic(this);
};

export default notifyToUpdate;
