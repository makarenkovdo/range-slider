import Bar from './Bar';
import {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './updateBarPosition/updateBarPositionUtility';

const updateBarPosition = function updateBarPositionToDOM(this: Bar): void {
  const { isRange, isVertical, runner } = this.parent;
  $(document).ready(() => {
    const { $bar, fieldThickness } = this;
    defineBarKind({
      isRange,
      isVertical,
      $bar,
      runnersPosition: runner.positions,
      fieldThickness,
      calcLengthOfRangeBar,
      updateSingleVerticalBarPosition,
      updateSingleHorizontalBarPosition,
      updateRangeBarPosition,
    });
  });
};

export default updateBarPosition;
