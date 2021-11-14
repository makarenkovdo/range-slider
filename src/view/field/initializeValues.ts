import SliderView from '../SliderView';

//  prettier-ignore
const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
  fieldThickness: number,
  orientation: 'vertical' | 'horizontal',
): void {
  // this.runnersPosition = runnersInstantPosition;
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
    } else {
      this.fieldSize = [fieldWidth - borderWidth - 11, fieldThickness];
      $field.css('height', fieldThickness);
    }
  });
  this.$field.addClass(`slider_${this.orientation} js_slider_${this.orientation}`);
};

export default initializeValues;
