import { CreateScaleNumbersBoxArgs } from '../../../viewInterfaces';

function createScaleNumbersBox(
  {
    $id,
    top,
    left,
    fieldSize,
  }:CreateScaleNumbersBoxArgs,
):void {
  $id.append(
    `<div 
          data-testid="test-slider__scale-numbers"
          class="slider__scale-lines slider__scale-numbers
            js-slider__scale-numbers"
          style="height:${fieldSize[1]}px;
            width:${fieldSize[0]}px;
            top:${top}px;
            left:${left}px;
          "
        >
        </div>`,
  );
}

export default createScaleNumbersBox;
