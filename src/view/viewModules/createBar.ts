import SliderView from '../SliderView';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const createBar = function addBarToDomAndSetThisBar(this: SliderView): void {
  const addBarToDom = () => {
    this.$field.append("<div class='slider-bar'></div>");
  };
  const setThis$bar = () => {
    this.$bar = this.$field.children('.slider-bar');
  };
  addBarToDom();
  setThis$bar();
  // this.updateBarPosition.call(this,
  //   isRange,
  //   activeRunner)
};

export default createBar;
