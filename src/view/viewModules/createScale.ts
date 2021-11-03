import SliderView from '../SliderView';
import { prepareDivisionsQuantity, addScaleToDom } from './createScale/createScaleUtility';

const createScale = function addRunnerToDOMAndSetThis$runner(this: SliderView): void {
  $(document).ready(() => {
    addScaleToDom(
      this.isVertical,
      this.$field,
      this.fieldSize,
      this.step,
      prepareDivisionsQuantity(this.fieldSize, this.isVertical, this.minMax, this.step),
    );
    // setThis.call(this, i);
  });
};

export default createScale;
