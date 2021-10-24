import {
  checkCollision,
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  setStepValueAndPosition,
} from './onDrag/updatePositionUtility';

const updatePosition = (event, { isVertical, minValue, maxValue }, slider, isRange, thisSlider) => {
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

const onMove = (event) => {
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

const activateOnDragListener = (thisSlider, field, slider, isRange) => {
  thisSlider.$field.on('mousedown touchstart', `.instance-${thisSlider.instance}`, (event) => {
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
  });
};

export { activateOnDragListener, updatePosition };
