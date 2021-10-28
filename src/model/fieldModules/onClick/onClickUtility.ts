import FieldModel from '../../FieldModel';
import RunnerModel from '../../RunnerModel';
import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

export type DataType = { field: FieldModel; runners: RunnerModel[]; isRange: boolean };

const defineNearestRunner = (
  cursorXY: number[],
  runnersPosition: number[],
  isVertical: boolean,
  fieldSize: string[],
): number => {
  const cursorXYInPercent = prepareDataForCompare(cursorXY, isVertical, fieldSize);

  return calculateAndCompareLengths(cursorXYInPercent, runnersPosition);
};
const handleClick = (event: JQuery.ClickEvent): void => {
  const evenData = event.data as DataType;
  let nearest = 0;

  // prettier-ignore
  if (evenData.isRange) {
    nearest = defineNearestRunner(
      [event.offsetX, event.offsetY],
      [evenData.runners[0].positionInPercent, evenData.runners[1].positionInPercent],
      evenData.field.isVertical,
      evenData.field.size,
    );
  }
  evenData.runners[nearest].updatePosition(
    event,
    evenData.field,
    evenData.runners,
    evenData.isRange,
    evenData.runners[nearest],
  );
};

const activateOnClickListener = (
  field: FieldModel,
  runners: RunnerModel[],
  isRange: boolean,
): void => {
  const eventData = { field, runners, isRange } as DataType;
  field.$element.on('click', eventData, handleClick);
};

export { defineNearestRunner, activateOnClickListener, handleClick };
