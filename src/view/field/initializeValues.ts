import SliderView from '../SliderView';

const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
  fieldThickness: number,
  orientation: 'vertical' | 'horizontal',
): void {
  this.runner.size = runnerSize;
  this.orientation = orientation;
  this.isVertical = orientation === 'vertical';
  $(document).ready(() => {
    const { $field }: SliderView = this;
    const borderWidth = parseInt($field.css('border-width'), 10);
    const fieldWidth = parseInt($field.parent().css('width'), 10);
    const fieldHeight = parseInt($field.parent().css('height'), 10);
    if (this.isVertical) {
      this.fieldSize = [fieldThickness, fieldHeight - borderWidth - 11];
      $field.css('width', fieldThickness);
      $field.css('height', '100%');
    } else {
      this.fieldSize = [fieldWidth - borderWidth - 11, fieldThickness];
      $field.css('height', fieldThickness);
      $field.css('width', '100%');
    }
  });
  this.$field.addClass(`slider_${this.orientation} js-slider_${this.orientation}`);
};

export default initializeValues;
