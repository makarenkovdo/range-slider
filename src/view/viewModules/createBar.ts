import SliderView from '../SliderView';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: SliderView): void {
  const addBarToDom = () => {
    this.$field.append(
      "<div data-testid='test-slider-bar' class='slider-bar js-slider-bar'></div>",
    );
  };
  const setThis$bar = () => {
    this.$bar = this.$field.children('.js-slider-bar');
  };
  addBarToDom();
  setThis$bar();
};

export default createBar;
