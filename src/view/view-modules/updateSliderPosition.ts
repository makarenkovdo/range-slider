import SliderModel from '../../model/slider-model';
import SliderView from '../slider-view';
import {
  setThisSliderPosition,
  defineSliderType,
  updatePositionToDOM,
} from './updateSliderPosition/updateSliderPositionUtility';

const updateSliderPosition = function updateSliderPositionToThisAndDOM(
  this: SliderView,
  updatingSlider: SliderModel,
): void {
  if (updatingSlider.stepPosition) setThisSliderPosition.call(this, updatingSlider);
  updatePositionToDOM(
    defineSliderType(this.isVertical, updatingSlider),
    this.isVertical,
    this.$field,
  );
};

export default updateSliderPosition;
