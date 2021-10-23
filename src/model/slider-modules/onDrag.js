/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["thisSlider"] }] */

// prettier-ignore
const checkCollision = (stepPosition, stepValue, slider, thisSlider) => {
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

const calculatePositionInPercentage = (isVertical, thisSlider, cursorXY) => {
  if (isVertical) {
    const fieldHeight = thisSlider.$field[0].offsetHeight;
    return ((fieldHeight - (cursorXY[1] + 1)) * 100) / fieldHeight;
  }
  return ((cursorXY[0] + 5) * 100) / thisSlider.$field[0].offsetWidth;
};

const setPositionInPercentage = (thisSlider, positionInPercentage) => {
  thisSlider.positionInPercentage = positionInPercentage;
};

const setValue = (thisSlider, value) => {
  thisSlider.value = value;
};

const calculateValue = (minValue, maxValue, thisSlider) => {
  const fieldLength = maxValue - minValue;
  return thisSlider.positionInPercentage * (fieldLength / 100) + +minValue;
};

const updatePosition = (
  event,
  { isVertical, minValue, maxValue },
  slider,
  hasRange,
  thisSlider,
) => {
  const cursorXY = [event.offsetX, event.offsetY];

  setPositionInPercentage(
    thisSlider,
    calculatePositionInPercentage(isVertical, thisSlider, cursorXY),
  );

  setValue(thisSlider, calculateValue(minValue, maxValue, thisSlider));
  const stepPosition = (
    Math.round(thisSlider.positionInPercentage / thisSlider.step) * thisSlider.step
  ).toFixed(thisSlider.stepSignAfterComma);
  const stepValue = (Math.round(thisSlider.value / thisSlider.step) * thisSlider.step).toFixed(
    thisSlider.stepSignAfterComma,
  );
  // console.log(stepPosition);

  // const returned = thisSlider.checkBordersCollision(stepPosition, slider);

  if (hasRange) {
    checkCollision(stepPosition, stepValue, slider, thisSlider);
  } else [thisSlider.stepPosition, thisSlider.stepValue] = [stepPosition, stepValue];
  thisSlider.notify(this);

  // if (slider[1].stepPosition < slider[0].stepPosition) {
  //     console.log('???')
  //     slider[1].stepPosition = slider[0].stepPosition
  //     slider[1].stepValue = slider[0].stepValue
  // }
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
