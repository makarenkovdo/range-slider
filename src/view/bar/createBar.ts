import SliderView from '../SliderView';
import Bar from './Bar';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: Bar): void {
  const { parent } = this;
  const addBarToDom = () => {
    $(document).ready(() => {
      parent.$field.append(
        `<div data-testid='test-slider-bar' class='slider__bar slider__bar_${parent.orientation} js-slider__bar'></div>`,
      );
    });
  };

  const setThis$bar = () => {
    parent.$bar = parent.$field.children('.js-slider__bar');
  };
  addBarToDom();
  $(document).ready(() => {
    setThis$bar();
  });
};

export default createBar;
