import { BuildParams } from '../../presenter/presenterInterfaces';
import RunnerModel from '../RunnerModel';

const notifyToRebuild = function notifySubscribersToRebuild(
  this: RunnerModel, rebuildData: BuildParams,
): void {
  this.subscriber.recieveRebuildData(rebuildData);
};

export default notifyToRebuild;
