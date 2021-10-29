import RunnerModel from '../../model/RunnerModel';
import handleClick from '../../model/fieldModules/prepareDataForRunnerUpdating';
import SliderView from '../SliderView';
import { HandleClickDataType } from '../../model/fieldModules/fieldModulesInterfaces';
import { Event } from 'jquery';

const activateOnClickListener = function activateOnClickListenerAndNotify(
  thisView: SliderView,
  // runners: RunnerModel[],
): void {
  thisView.$field.on('click', { thisView }, handleClick);
};

export default activateOnClickListener;
