import SliderView from '../SliderView';

//  prettier-ignore
const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
  orientation: 'vertical' | 'horizontal',
): void {
  this.runnerSize = runnerSize;
  this.orientation = orientation;
  $(document).ready(() => {
    const { $field }: SliderView = this;
    const borderWidth = parseInt($field.css('border-width'), 10);
    const fieldWidth = parseInt($field.css('width'), 10);
    const fieldHeight = parseInt($field.css('height'), 10);
    if (this.isVertical) {
      this.fieldSize = [fieldWidth - borderWidth - 1, fieldHeight - borderWidth - 41];
    } else {
      this.fieldSize = [fieldWidth - borderWidth - 41, fieldHeight - borderWidth - 1];
    }
  });
  this.$field.addClass(`slider_${this.orientation} js_slider_${this.orientation}`);
};

export default initializeValues;
