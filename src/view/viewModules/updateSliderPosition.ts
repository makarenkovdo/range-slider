import RunnerModel from '../../model/RunnerModel';
import SliderView from '../SliderView';
import {
  setThisRunnerPosition,
  defineRunnerType,
  updatePositionToDOM,
} from './updateRunnerPosition/updateRunnerPositionUtility';

const updateRunnerPosition = function updateRunnerPositionToThisAndDOM(
  this: SliderView,
  updatingRunner: RunnerModel,
): void {
  if (updatingRunner.stepPosition) setThisRunnerPosition.call(this, updatingRunner);
  updatePositionToDOM(
    defineRunnerType(this.isVertical, updatingRunner),
    this.isVertical,
    this.$field,
  );
};

export default updateRunnerPosition;
