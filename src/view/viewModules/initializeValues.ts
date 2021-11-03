import SliderView from '../SliderView';

//  prettier-ignore
const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
): void {
  $(document).ready(() => {
    const {
      $runners, $field,
    }: SliderView = this;
    const runnerWidth = parseInt($runners[0].css('width'), 10);
    const runnerHeight = parseInt($runners[0].css('height'), 10);
    const borderWidth = parseInt($field.css('border-width'), 10);
    const fieldWidth = parseInt($field.css('width'), 10);
    const fieldHeight = parseInt($field.css('height'), 10);
    this.runnerSize = [runnerWidth, runnerHeight];

    this.fieldSize = [fieldWidth - borderWidth - 1, fieldHeight - borderWidth - 1];
    console.log(this.fieldSize);
    
  });
};

export default initializeValues;
