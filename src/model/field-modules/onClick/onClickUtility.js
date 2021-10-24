const defineNearestSlider = (event) => {
  const cursorXY = [event.offsetX, event.offsetY];
  let positioning = 'left';
  let xySwitcher = 0;
  if (event.data.field.isVertical) {
    positioning = 'top';
    xySwitcher = 1;
  }

  // prettier-ignore
  const slidersPosition = [0, 1].map((v) => parseInt(event.data.field.$element.children(`.slider.instance-${v}`).css(positioning), 10));
  const lengthToFirstSlider = Math.abs(cursorXY[xySwitcher] - slidersPosition[0]);
  const lengthToSecondSlider = Math.abs(cursorXY[xySwitcher] - slidersPosition[1]);
  const nearest = lengthToFirstSlider - lengthToSecondSlider < 0 ? 0 : 1;

  return nearest;
};
const handleClick = (event) => {
  let nearest = 0;
  if (event.data.isRange) nearest = defineNearestSlider(event);
  event.data.sliders[nearest].updatePosition(
    event,
    event.data.field,
    event.data.sliders,
    event.data.isRange,
    event.data.sliders[nearest],
  );
};

const activateOnClickListener = (field, sliders, isRange) => {
  field.$element.on('click', { field, sliders, isRange }, handleClick);
};

export default activateOnClickListener;
