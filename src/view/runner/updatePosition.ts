import Runner from './Runner';
import {
  defineRunnerType,
  setThisRunnerPosition,
  updatePositionToDOM,
} from './updatePosition/updatePositionUtility';

const updatePosition = function updatePositionToThisAndDOM(
  this: Runner,
  stepPosition: number,
  instance: number,
): void {
  setThisRunnerPosition.call(this, stepPosition, instance);
  updatePositionToDOM.call(this, defineRunnerType(this.parent.isVertical, stepPosition, instance));
};

export default updatePosition;
