import SliderView from '../SliderView';
import addScaleToDom from './createScale/createScaleUtility';

// how to test? this.$runner is a the result of div-appending and ALL THIS MODULE

const createScale = function addRunnerToDOMAndSetThis$runner(this: SliderView): void {
  $(document).ready(() => {
    addScaleToDom(this.isVertical, this.$field, this.fieldSize);
    // setThis.call(this, i);
  });
};

export default createScale;
