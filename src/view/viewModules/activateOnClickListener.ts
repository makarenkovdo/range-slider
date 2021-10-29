import RunnerModel from '../../model/RunnerModel';
import {
  handleClick,
} from '../../model/fieldModules/onClick/defineNearestRunner';

const activateOnClickListener = (
  $field: JQuery<HTMLElement>,
  fieldSize: number[],
  runners: RunnerModel[],
  isVertical: boolean,
  isRange: boolean,
): void => {
    $field: JQuery<HTMLElement>,
    fieldSize: number[],
    runners: RunnerModel[],
    isVertical: boolean,
    isRange: boolean, } as DataType;
  $field.on('click', eventData, handleClick);
};

export default activateOnClickListener;
