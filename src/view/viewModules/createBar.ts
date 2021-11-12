import SliderView from '../SliderView';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: SliderView): void {
  console.log('BAR?');

  const addBarToDom = () => {
    console.log('BAR BAR  ?');
    console.log('this.$field', this.$field);
    $(document).ready(() => {
      this.$field.append(
        `<div data-testid='test-slider-bar' class='slider__bar slider__bar_${this.orientation} js-slider__bar'></div>`,
      );
    });
  };

  const setThis$bar = () => {
    this.$bar = this.$field.children('.js-slider__bar');
    console.log(this.$bar);
  };
  addBarToDom();
  $(document).ready(() => {
    setThis$bar();
  });
};

export default createBar;
