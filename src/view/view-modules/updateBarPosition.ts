import SliderModel from '../../model/slider-model';
import SliderView from '../slider-view';
import {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './updateBarPosition/updateBarPositionUtility';

const updateBarPosition = function updateBarPositionToDOM(
  this: SliderView,
  isRange: boolean,
  activeSlider: SliderModel,
): void {
  defineBarKind({
    isRange,
    activeSlider,
    isVertical: this.isVertical,
    $bar: this.$bar,
    slidersPosition: this.slidersPosition,
    calcLengthOfRangeBar,
    updateSingleVerticalBarPosition,
    updateSingleHorizontalBarPosition,
    updateRangeBarPosition,
  });
};

export default updateBarPosition;
