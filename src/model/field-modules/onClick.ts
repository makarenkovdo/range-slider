import SliderModel from '../slider-model';
import activateOnClickListener from './onClick/onClickUtility';

const onClick = function updateSliderOnFieldClick(sliders: SliderModel[], isRange: boolean): void {
  activateOnClickListener(this, sliders, isRange);
};

export default onClick;
