import activateOnClickListener from './onClick/onClickUtility';

const onClick = function updateSliderOnFieldClick(sliders, isRange) {
  activateOnClickListener(this, sliders, isRange);
};

export default onClick;
