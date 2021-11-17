import SliderView from '../SliderView';
import Bar from './Bar';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: Bar, fieldThickness: number): void {
  const { parent } = this;
  const addBarToDom = () => {
    const widthOrHeight = parent.isVertical ? 'width' : 'height';
    $(document).ready(() => {
      parent.$field.append(
        `<div data-testid='test-slider-bar' class='slider__bar slider__bar_${parent.orientation} js-slider__bar' style='${widthOrHeight}: ${fieldThickness}'></div>`,
      );
    });
  };

  const setThis$bar = () => {
    this.$bar = parent.$field.children('.js-slider__bar');
    this.fieldThickness = fieldThickness;
  };
  addBarToDom();
  $(document).ready(() => {
    setThis$bar();
  });
};

export default createBar;
