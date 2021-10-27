import FieldModel from '../../field-model';
import SliderModel from '../../slider-model';
import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

export type DataType = { field: FieldModel; sliders: SliderModel[]; isRange: boolean };

const defineNearestSlider = (
  cursorXY: number[],
  slidersPosition: number[],
  isVertical: boolean,
  fieldSize: string[],
): number => {
  const cursorXYInPercent = prepareDataForCompare(cursorXY, isVertical, fieldSize);
  return calculateAndCompareLengths(cursorXYInPercent, slidersPosition);
};
const handleClick = (event: JQuery.ClickEvent) => {
  const evenData = event.data as DataType;
  let nearest = 0;

  // prettier-ignore
  if (evenData.isRange) {
    nearest = defineNearestSlider(
      [event.offsetX, event.offsetY],
      [evenData.sliders[0].positionInPercent, evenData.sliders[1].positionInPercent],
      evenData.field.isVertical,
      evenData.field.size,
    );
  }
  evenData.sliders[nearest].updatePosition(
    event,
    evenData.field,
    evenData.sliders,
    evenData.isRange,
    evenData.sliders[nearest],
  );
};

const activateOnClickListener = (
  field: FieldModel,
  sliders: SliderModel[],
  isRange: boolean,
): void => {
  const eventData = { field, sliders, isRange } as DataType;
  field.$element.on('click', eventData, handleClick);
};

export default activateOnClickListener;
