import FieldModel from '../../field-model';
import SliderModel from '../../slider-model';
import {
  checkCollision,
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  setStepValueAndPosition,
} from './updatePositionUtility';

type UpdatePositionSubargsType = {
  isVertical: boolean;
  minValue: number;
  maxValue: number;
};
// type UpdatePositionArgsType = {
//   event: JQuery.DragEvent | JQuery.ClickEvent;
//   obj:UpdatePositionSubargsType;
//   field: FieldModel;
//   slider: SliderModel[];
//   isRange: boolean;
//   thisSlider: SliderModel;
// };

const updatePosition = (
  event: JQuery.DragEvent | JQuery.ClickEvent,
  { isVertical, minValue, maxValue }: UpdatePositionSubargsType,
  slider: SliderModel[],
  isRange: boolean,
  thisSlider: SliderModel,
): void => {
  setPositionInPercent(
    thisSlider,
    calculatePositionInPercent(isVertical, thisSlider, event.offsetX, event.offsetY),
  );

  setValue(thisSlider, calculateValue(minValue, maxValue, thisSlider));

  // const returned = thisSlider.checkBordersCollision(stepPosition, slider);
  if (isRange) {
    setStepValueAndPosition(
      thisSlider,
      checkCollision(calculateStepValueAndPosition(thisSlider), slider, thisSlider),
    );
  } else {
    setStepValueAndPosition(thisSlider, calculateStepValueAndPosition(thisSlider));
  }
  thisSlider.notify(this);
};

const onMove = (event: JQuery.ClickEvent) => {
  event.preventDefault();
  event.stopPropagation();
  updatePosition(
    event,
    event.data.field,
    event.data.slider,
    event.data.isRange,
    event.data.thisSlider,
  );
};

const activateOnDragListener = (
  thisSlider: SliderModel,
  field: FieldModel,
  slider: SliderModel[],
  isRange: boolean,
): void => {
  thisSlider.$field.on(
    'mousedown touchstart',
    `.instance-${thisSlider.instance}`,
    (event: JQuery.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      thisSlider.$field.addClass('tap');
      thisSlider.$field.on(
        'mousemove touchmove',
        {
          thisSlider,
          field,
          slider,
          isRange,
        },
        onMove,
      );
    },
  );
};

export { activateOnDragListener, updatePosition };
