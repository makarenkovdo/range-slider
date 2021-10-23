/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["thisSlider"] }] */

import {
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  checkCollision,
} from './onDrag/updatePositionUtility';

const updatePosition = (
  event,
  { isVertical, minValue, maxValue },
  slider,
  hasRange,
  thisSlider,
) => {
  setPositionInPercent(
    thisSlider,
    calculatePositionInPercent(isVertical, thisSlider, event.offsetX, event.offsetY),
  );

  setValue(thisSlider, calculateValue(minValue, maxValue, thisSlider));

  // const returned = thisSlider.checkBordersCollision(stepPosition, slider);
  if (hasRange) {
    checkCollision(calculateStepValueAndPosition(thisSlider), slider, thisSlider);
  } else {
    [thisSlider.stepPosition, thisSlider.stepValue] = [calculateStepValueAndPosition(thisSlider)];
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
    event.data.hasRange,
    event.data.thisSlider,
  );
};

const activateOnDragListener = (thisSlider, field, slider, hasRange) => {
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
        hasRange,
      },
      onMove,
    );
  });
};

export default activateOnDragListener;
