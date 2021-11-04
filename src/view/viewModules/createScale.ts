import SliderView from '../SliderView';
import { prepareScaleData, addScaleToDom } from './createScale/createScaleUtility';

const createScale = function addRunnerToDOMAndSetThis$runner(this: SliderView): void {
  $(document).ready(() => {
    addScaleToDom(
      this.isVertical,
      this.$field,
      this.fieldSize,
      this.step,
      this.stepSignAfterComma,
      prepareScaleData(
        this.fieldSize, this.isVertical, this.minMax, this.step, this.stepSignAfterComma,
      ),
    );
    // setThis.call(this, i);
  });
};

export default createScale;
