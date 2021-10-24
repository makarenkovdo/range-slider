import activateOnClickListener from './onClick/onClickUtility';

//const updatePosition = (event, { isVertical, minValue, maxValue }, slider, isRange, thisSlider) => {
const onClick = function updateSliderOnFieldClick(sliders, isRange) {
  activateOnClickListener(this, sliders, isRange);
};

export default onClick;
