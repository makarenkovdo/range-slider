import { addTipNumberToDOM, prepareTipNumberArgs } from './create/createUtility';
import Tip from './Tip';

const create = function addTipNumberToDOMAndUpdateTextNumber(
  this: Tip,
  i: number,
  isVertical: boolean,
  stepPosition:number,
  stepValue:number,
): void {
  console.log(  'stepPositionstepValue,',stepPosition, stepValue);
  
  $(document).ready(() => {
    const {
      fieldSize,
      $field,
      orientation,
      minMax,
    } = this.parent;

    addTipNumberToDOM(
      prepareTipNumberArgs(
        i,
        isVertical,
        fieldSize,
        stepPosition,
      ),
      $field,
      orientation,
      minMax,
      stepValue,
    );
  });
  this.parent.hasTip = true;
};

export default create;
