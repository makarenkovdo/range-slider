import SliderView from '../SliderView';

//  prettier-ignore
const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
): void {
  $(document).ready(() => {
    const {
      $runners, $field, isVertical, fieldSize,
    }: SliderView = this;
    const runnerWidth = parseInt($runners[0].css('width'), 10);
    const runnerHeight = parseInt($runners[0].css('height'), 10);
    const borderWidth = parseInt($field.css('border-width'), 10);
    const fieldWidth = parseInt($field.css('width'), 10);
    const fieldHeight = parseInt($field.css('height'), 10);
    this.runnerSize = [runnerWidth, runnerHeight];

    this.fieldSize = [fieldWidth - borderWidth - 1, fieldHeight - borderWidth - 1];
    if (isVertical) {
      this.corrector = (runnerSize[1] / fieldSize[1]) * 50;
    } else {
      this.corrector = (runnerSize[0] / fieldSize[0]) * 50;
    }
  });
};

export default initializeValues;
