import SliderView from '../slider-view';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: SliderView): void {
  const setThis$bar = () => {
    this.$bar = this.$field.children('.slider-bar');
  };

  const addBarToDom = () => {
    this.$field.append("<div class='slider-bar'></div>");
  };
  addBarToDom();
  setThis$bar();
};

export default createBar;
