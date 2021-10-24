import {
  setThisSliderPosition,
  defineSliderType,
  updatePositionToDOM,
} from './updateSliderPosition/updateSliderPositionUtility';

const updateSliderPosition = function updateSliderPositionToThisAndDOM(updatingSlider) {
  console.log('updatingSlider', updatingSlider);
  if (updatingSlider.stepPosition) setThisSliderPosition.call(this, updatingSlider);
  updatePositionToDOM(
    defineSliderType(this.isVertical, updatingSlider),
    this.isVertical,
    this.$field,
  );
};

export default updateSliderPosition;
