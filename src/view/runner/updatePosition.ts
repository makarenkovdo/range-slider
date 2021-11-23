import {
  defineRunnerType,
  setThisRunnerPosition,
  updatePositionToDOM,
} from './updatePosition/updatePositionUtility';
import Runner from './Runner';

const updatePosition = function updatePositionToThisAndDOM(
  this: Runner,
  stepPosition: number,
  instance: number,
): void {
  setThisRunnerPosition.call(this, stepPosition, instance);
  updatePositionToDOM.call(this, defineRunnerType(this.parent.isVertical, stepPosition, instance));
};

export default updatePosition;
