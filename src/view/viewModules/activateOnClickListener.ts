import RunnerModel from '../../model/RunnerModel';
import handleClick from '../../model/fieldModules/handleClick';
import SliderView from '../SliderView';
import { HandleClickDataType } from '../../model/fieldModules/fieldModulesInterfaces';

const activateOnClickListener = function activateOnClickListenerAndNotify(
  { $field, fieldSize, isVertical, minMax, isRange }: SliderView,
  runners: RunnerModel[],
): void {
  const eventData: HandleClickDataType = {
    fieldSize,
    runners,
    isRange,
    isVertical,
    minMax,
  };
  $field.on('click', eventData, handleClick);
};

export default activateOnClickListener;
