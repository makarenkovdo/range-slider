import SliderView from '../SliderView';
import {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './updateBarPosition/updateBarPositionUtility';

const updateBarPosition = function updateBarPositionToDOM(this: SliderView): void {
  $(document).ready(() => {
    defineBarKind({
    // todo destruction
      isRange: this.isRange,
      isVertical: this.isVertical,
      $bar: this.$bar,
      runnersPosition: this.runnersPosition,
      calcLengthOfRangeBar,
      updateSingleVerticalBarPosition,
      updateSingleHorizontalBarPosition,
      updateRangeBarPosition,
    });
  });
};

export default updateBarPosition;
