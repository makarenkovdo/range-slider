import RunnerModel from '../../model/RunnerModel';
import SliderView from '../SliderView';
import {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './updateBarPosition/updateBarPositionUtility';

const updateBarPosition = function updateBarPositionToDOM(
  this: SliderView,
  activeRunner: RunnerModel,
): void {
  defineBarKind({
    // todo destruction
    isRange: this.isRange,
    activeRunner,
    isVertical: this.isVertical,
    $bar: this.$bar,
    runnersPosition: this.runnersPosition,
    calcLengthOfRangeBar,
    updateSingleVerticalBarPosition,
    updateSingleHorizontalBarPosition,
    updateRangeBarPosition,
  });
};

export default updateBarPosition;
