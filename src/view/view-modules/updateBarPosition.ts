import SliderModel from '../../model/slider-model';
import SliderView from '../slider-view';
import {
  defineBarType,
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
  defineBarType({
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
