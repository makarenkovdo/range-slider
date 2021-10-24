import { addTipNumberToDOM, prepareTipNumberArgs } from './createTipNumber/createTipNumberUtility';

const createTipNumber = function addTipNumberToDOMAndUpdateTextNumber(i, isVertical) {
  this.updateTextNumber(addTipNumberToDOM(prepareTipNumberArgs(i, isVertical), this.$field));
};

export default createTipNumber;
