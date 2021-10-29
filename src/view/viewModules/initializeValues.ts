import SliderView from '../SliderView';

const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
  // todo DESTRUCTION
): void {
  $(document).ready(() => {
    const runnerWidth = parseInt(this.$runners[0].css('width'), 10);
    const runnerHeight = parseInt(this.$runners[0].css('height'), 10);
    const borderWidth = parseInt(this.$field.css('border-width'), 10);
    const fieldWidth = parseInt(this.$field.css('width'), 10);
    const fieldHeight = parseInt(this.$field.css('height'), 10);
    this.runnerSize = [runnerWidth, runnerHeight];
    this.fieldSize = [fieldWidth - borderWidth - 1, fieldHeight - borderWidth - 1];
    if (this.isVertical) {
      this.corrector = (runnerSize[1] / this.fieldSize[1]) * 50;
    } else {
      this.corrector = (runnerSize[0] / this.fieldSize[0]) * 50;
    }
  });
};

export default initializeValues;
