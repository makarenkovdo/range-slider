import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import RunnerModel from '../RunnerModel';
import { NotifyMessageType } from './runnerInterfaces';

const notifyToRebuild = function notifySubscribersToRebuild(this: RunnerModel, messageType: NotifyMessageType, rebuildData?: PresenterBuildParams): void {
  switch (messageType) {
    case 'modelLogic': {
      this.subscriber.recieveModelLogic(this);
      break;
    }
    case 'rebuildData': {
      this.subscriber.recieveRebuildData(rebuildData);
      break;
    }
    default: console.log('something get wrong');
  }
};

export default notifyToRebuild;
