/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["thisSlider"] }] */

import {
  calculatePositionInPercentage,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercentage,
  setValue,
} from './onDrag/updatePositionUtility';

// prettier-ignore
const checkCollision = ({ stepPosition, stepValue }, slider, thisSlider) => {
  const isCollisionFirst = () => (!thisSlider.isVertical && thisSlider.instance === 0
        && stepPosition - slider[1].stepPosition >= thisSlider.step)
        || (thisSlider.isVertical && thisSlider.instance === 0
          && stepPosition - slider[1].stepPosition <= thisSlider.step);

  // prettier-ignore
  const isCollisionSecond = () => (
    (!thisSlider.isVertical && thisSlider.instance === 1
        && stepPosition - slider[0].stepPosition <= thisSlider.step)
        || (thisSlider.isVertical && thisSlider.instance === 0
          && stepPosition - slider[0].stepPosition >= thisSlider.step)
  );
    // todo: slider[0] = thisSlider.slider
    // if (isCollisionFirst) {
    //   slider[0].stepPosition = +slider[1].stepPosition - thisSlider.step;
    //   slider[0].stepValue = +slider[1].stepValue - thisSlider.step;
    // } else if (isCollisionSecond) {
    //   slider[1].stepPosition = +slider[0].stepPosition + thisSlider.step;
    //   slider[1].stepValue = +slider[0].stepValue + thisSlider.step;
    // } else {
    //   thisSlider.stepPosition = stepPosition;
    //   thisSlider.stepValue = stepValue;
    // }

  if (isCollisionFirst()) {
    thisSlider.stepPosition = +slider[1].stepPosition - thisSlider.step;
    thisSlider.stepValue = +slider[1].stepValue - thisSlider.step;
  } else if (isCollisionSecond()) {
    thisSlider.stepPosition = +slider[0].stepPosition + thisSlider.step;
    thisSlider.stepValue = +slider[0].stepValue + thisSlider.step;
  } else {
    thisSlider.stepPosition = stepPosition;
    thisSlider.stepValue = stepValue;
  }
};

const updatePosition = (
  event,
  { isVertical, minValue, maxValue },
  slider,
  hasRange,
  thisSlider,
) => {
  setPositionInPercentage(
    thisSlider,
    calculatePositionInPercentage(isVertical, thisSlider, event.offsetX, event.offsetY),
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

// prettier-ignore
export {
  onMove,
  activateOnDragListener,
  updatePosition,
  checkCollision,
};
