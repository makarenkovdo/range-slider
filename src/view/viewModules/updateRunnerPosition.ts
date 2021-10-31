import SliderView from '../SliderView';
import {
  setThisRunnerPosition,
  defineRunnerType,
  updatePositionToDOM,
} from './updateRunnerPosition/updateRunnerPositionUtility';

const updateRunnerPosition = function updateRunnerPositionToThisAndDOM(
  this: SliderView,
  stepPosition: number,
  instance: number,
): void {
  setThisRunnerPosition.call(this, stepPosition, instance);
  updatePositionToDOM.call(this, defineRunnerType(this.isVertical, stepPosition, instance));
};

export default updateRunnerPosition;
