import SliderView from '../SliderView';
import { addTipNumberToDOM, prepareTipNumberArgs } from './createTipNumber/createTipNumberUtility';

const createTipNumber = function addTipNumberToDOMAndUpdateTextNumber(
  this: SliderView,
  i: number,
  isVertical: boolean,
  stepPosition:number,
  stepValue:number,
): void {
  $(document).ready(() => {
    addTipNumberToDOM(
      prepareTipNumberArgs(
        i,
        isVertical,
        this.fieldSize,
        stepPosition,
      ),
      this.$field,
      this.orientation,
      this.minMax,
      stepValue,
    );
  });
  this.hasTip = true;
};

export default createTipNumber;
