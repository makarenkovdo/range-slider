import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import RunnerModel from '../RunnerModel';

const notifyToRebuild = function notifySubscribersToRebuild(
  this: RunnerModel, rebuildData: PresenterBuildParams,
): void {
  this.subscriber.recieveRebuildData(rebuildData);
};

export default notifyToRebuild;
