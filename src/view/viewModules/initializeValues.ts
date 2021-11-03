import SliderView from '../SliderView';

//  prettier-ignore
const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
): void {
  this.runnerSize = runnerSize;
  $(document).ready(() => {
    const { $field }: SliderView = this;
    const borderWidth = parseInt($field.css('border-width'), 10);
    const fieldWidth = parseInt($field.css('width'), 10);
    const fieldHeight = parseInt($field.css('height'), 10);
    this.fieldSize = [fieldWidth - borderWidth - 1, fieldHeight - borderWidth - 1];
  });
};

export default initializeValues;
