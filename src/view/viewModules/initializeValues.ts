import SliderView from '../SliderView';

const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
  fieldSize: number[],
  isVertical: boolean,
): void {
  this.runnerSize = runnerSize;
  this.fieldSize = fieldSize;
  this.isVertical = isVertical;
  if (this.isVertical) {
    this.corrector = (runnerSize[1] / fieldSize[1]) * 50;
  } else {
    this.corrector = (runnerSize[0] / fieldSize[0]) * 50;
  }
};

export default initializeValues;
