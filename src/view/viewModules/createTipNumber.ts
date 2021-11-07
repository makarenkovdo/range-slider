import SliderView from '../SliderView';
import { addTipNumberToDOM, prepareTipNumberArgs } from './createTipNumber/createTipNumberUtility';

const createTipNumber = function addTipNumberToDOMAndUpdateTextNumber(
  this: SliderView,
  i: number,
  isVertical: boolean,
): void {
    addTipNumberToDOM(prepareTipNumberArgs(i, isVertical), this.$field, this.orientation),
  this.hasTip = true;
};

export default createTipNumber;
