import { CreateScaleLinesBoxArgs } from '../../../viewInterfaces';

function createScaleLinesBox(
  {
    $id,
    orientation,
    fieldSize,
    lineQuantity,
    top,
    left,
    columnOrRow,
  }:CreateScaleLinesBoxArgs,
):void {
  $id.append(
    `<div 
          data-testid="test-slider__scale-lines"
          class="slider__scale-lines slider__scale-lines_${orientation}
            js-slider__scale-lines"
          style="height:${fieldSize[1]}px;
            width:${fieldSize[0]}px;
            left:${left}px; top:${top}px;
          "
        >
        </div>`,
  );
}

export default createScaleLinesBox;
