import {
  defineBarType,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './updateBarPosition/updateBarPositionUtility';

const updateBarPosition = function updateBarPositionToDOM(isRange, activeSlider) {
  defineBarType({
    isRange,
    activeSlider,
    isVertical: this.isVertical,
    $bar: this.$bar,
    $field: this.$field,
    slidersPosition: this.slidersPosition,
    calcLengthOfRangeBar,
    updateSingleVerticalBarPosition,
    updateSingleHorizontalBarPosition,
    updateRangeBarPosition,
  });
};

export default updateBarPosition;
