import SliderView from '../SliderView';
import Bar from './Bar';
import {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './updateBarPosition/updateBarPositionUtility';

const updateBarPosition = function updateBarPositionToDOM(this: Bar): void {
  const { parent } = this;
  $(document).ready(() => {
    defineBarKind({
    // todo destruction
      isRange: parent.isRange,
      isVertical: parent.isVertical,
      $bar: this.$bar,
      runnersPosition: parent.runner.positions,
      calcLengthOfRangeBar,
      updateSingleVerticalBarPosition,
      updateSingleHorizontalBarPosition,
      updateRangeBarPosition,
    });
  });
};

export default updateBarPosition;
