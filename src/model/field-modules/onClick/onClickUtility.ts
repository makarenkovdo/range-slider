import FieldModel from '../../field-model';
import SliderModel from '../../slider-model';
import {
  calculateAndCompareLengths,
  prepareDataForCompare,
} from './defineNearest/defineNearestUtility';

export type DataType = { field: FieldModel; sliders: SliderModel[]; isRange: boolean };

const defineNearestSlider = (event: JQuery.ClickEvent, sliders: SliderModel[]): number => {
  const { cursorXY, slidersPosition } = prepareDataForCompare(event, sliders);
  return calculateAndCompareLengths(cursorXY, slidersPosition);
};
const handleClick = (event: JQuery.ClickEvent) => {
  const evenData = event.data as DataType;
  let nearest = 0;
  if (evenData.isRange) nearest = defineNearestSlider(event, evenData.sliders);
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
