import FieldModel from '../../field-model';
import SliderModel from '../../slider-model';

type DataType = { field: FieldModel; sliders: SliderModel[]; isRange: boolean };

const defineNearestSlider = (event: JQuery.ClickEvent) => {
  const evenData = event.data as DataType;
  const cursorXY = [event.offsetX, event.offsetY];
  let positioning = 'left';
  let xySwitcher = 0;
  if (evenData.field.isVertical) {
    positioning = 'top';
    xySwitcher = 1;
  }

  // prettier-ignore
  const slidersPosition = [0, 1].map((v) => parseInt(evenData.field.$element.children(`.slider.instance-${v}`).css(positioning), 10));
  const lengthToFirstSlider = Math.abs(cursorXY[xySwitcher] - slidersPosition[0]);
  const lengthToSecondSlider = Math.abs(cursorXY[xySwitcher] - slidersPosition[1]);
  const nearest = lengthToFirstSlider - lengthToSecondSlider < 0 ? 0 : 1;

  return nearest;
};
const handleClick = (event: JQuery.ClickEvent) => {
  const evenData = event.data as DataType;
  let nearest = 0;
  if (evenData.isRange) nearest = defineNearestSlider(event);
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
