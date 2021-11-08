import SliderView from '../SliderView';

//  prettier-ignore
const initializeValues = function initializeDefaultViewValues(
  this: SliderView,
  runnerSize: number[],
  fieldThickness: number,

  orientation: 'vertical' | 'horizontal',
): void {
  this.runnerSize = runnerSize;
  this.orientation = orientation;
  this.isVertical = orientation === 'vertical';
  let {
    $field, isVertical, fieldSize,
  }: SliderView = this;
  // window.onload = () => {
  // window.addEventListener('load', (event) => {
  $().ready(() => {
  // document.addEventListener("DOMContentLoaded", function(event) {
    const borderWidth = parseInt($field.css('border-width'), 10);
    const fieldWidth = parseInt($field.css('width'), 10);
    const fieldHeight = parseInt($field.css('height'), 10);
    if (isVertical) {
      fieldSize = [fieldWidth - borderWidth - 1, fieldHeight - borderWidth - 11];
    } else {
      fieldSize = [fieldWidth - borderWidth - 11, fieldHeight - borderWidth - 1];
    }
    console.log('fieldWidth', fieldWidth);

    console.log(fieldSize);
  });
  this.$field.addClass(`slider_${this.orientation} js_slider_${this.orientation}`);
};

export default initializeValues;
