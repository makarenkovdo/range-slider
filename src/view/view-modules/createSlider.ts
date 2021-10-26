import SliderView from '../slider-view';
import { setThis, addSliderToDOM, prepareSliderArgs } from './createSlider/createSliderUtility';

// how to test? this.$slider is a the result of div-appending and ALL THIS MODULE

const createSlider = function addSliderToDOMAndSetThis$slider(this: SliderView, i: number): void {
  addSliderToDOM(prepareSliderArgs(i, this.isVertical), this.$field, this.sliderSize);
  setThis.call(this);
};

export default createSlider;
