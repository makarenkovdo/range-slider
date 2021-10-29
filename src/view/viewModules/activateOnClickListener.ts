import RunnerModel from '../../model/RunnerModel';
import { handleClick } from '../../model/fieldModules/handleClick';
import { DataType } from '../../model/fieldModules/onClick/defineNearestRunner';
import FieldModel from '../../model/FieldModel';
import SliderView from '../SliderView';

const activateOnClickListener = function activateOnClickListenerAndNotify(
  this: SliderView,
  runners: RunnerModel[],
  { isVertical, minValue, maxValue }: FieldModel,
): void {
  const eventData: DataType = {
    cursorXY,
    fieldSize,
    runners,
    isVertical,
    isRange,
    minValue,
    maxValue,
  };
  $field.on('click', eventData, handleClick);
};

export default activateOnClickListener;
