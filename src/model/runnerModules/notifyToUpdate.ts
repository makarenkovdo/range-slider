import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import RunnerModel from '../RunnerModel';
import { NotifyMessageType } from './runnerInterfaces';

const notifyToUpdate = function notifySubscribersToUpdate(this: RunnerModel): void {
  this.subscriber.recieveModelLogic(this);
};

export default notifyToUpdate;
