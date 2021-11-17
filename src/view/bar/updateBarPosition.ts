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
  const { isRange, isVertical, runner } = this.parent;
  const {$bar, fieldThickness} = this
  
  $(document).ready(() => {
    defineBarKind({
      isRange: isRange,
      isVertical: isVertical,
      $bar: $bar,
      runnersPosition: runner.positions,
      fieldThickness: fieldThickness,
      calcLengthOfRangeBar,
      updateSingleVerticalBarPosition,
      updateSingleHorizontalBarPosition,
      updateRangeBarPosition,
    });
  });
};

export default updateBarPosition;
