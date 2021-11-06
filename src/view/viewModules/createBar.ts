import SliderView from '../SliderView';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: SliderView): void {
  const addBarToDom = () => {
    const modificator = this.isVertical ? 'vertical' : 'horizontal';
    this.$field.append(
      `<div data-testid='test-slider-bar' class='slider__bar slider__bar_${modificator} js-slider__bar'></div>`,
    );
  };
  const setThis$bar = () => {
    this.$bar = this.$field.children('.js-slider__bar');
  };
  addBarToDom();
  setThis$bar();
};

export default createBar;
