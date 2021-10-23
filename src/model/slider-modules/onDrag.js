import { Event } from 'jquery';

const onMove = (event) => {
  event.preventDefault();
  event.stopPropagation();
  measurePosition(
    event,
    event.data.field,
    event.data.slider,
    event.data.hasRange,
    event.data.thisSlider,
  );
};

const activateOnDragListener = (thisSlider, field, slider, hasRange, $field) => {
  thisSlider.$field.on('mousedown touchstart', `.instance-${thisSlider.instance}`, (event) => {
    event.preventDefault();
    event.stopPropagation();
    thisSlider.$field.addClass('tap');
    thisSlider.$field.on('mousemove touchmove', { field, slider, hasRange, thisSlider }, onMove);
  });
};

// prettier-ignore
const checkCollision = (stepPosition, stepValue, slider,thisSlider) => {
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

const measurePosition = (
  event,
  { isVertical, minValue, maxValue },
  slider,
  hasRange,
  thisSlider,
) => {
  console.log(event, { isVertical, minValue, maxValue }, slider, hasRange);
  const cursorX = event.offsetX;
  const cursorY = event.offsetY;
  if (isVertical) {
    const fieldHeight = thisSlider.$field[0].offsetHeight;
    thisSlider.positionInPercentage = ((fieldHeight - (cursorY + 1)) * 100) / fieldHeight;
  } else {
    thisSlider.positionInPercentage = ((cursorX + 5) * 100) / thisSlider.$field[0].offsetWidth;
  }
  const fieldLength = maxValue - minValue;
  thisSlider.value = thisSlider.positionInPercentage * (fieldLength / 100) + +minValue;
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

export { onMove, activateOnDragListener, measurePosition, checkCollision };
