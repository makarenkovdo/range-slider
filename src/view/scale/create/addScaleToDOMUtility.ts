import { Orientation } from '../../../presenter/presenterInterfaces';
import {
  CreateScaleLinesArgs, CreateScaleLinesBoxArgs, CreateScaleNumbersArgs, CreateScaleNumbersBoxArgs,
} from '../../viewInterfaces';

function createScaleLinesBox(
  {
    $id, orientation, fieldSize, lineQuantity, top, left, columnOrRow,
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

function createScaleNumbersBox(
  {
    $id,
    lineQuantity,
    width,
    height,
    top,
    left,
    columnOrRow,
  }:CreateScaleNumbersBoxArgs,
):void {
  $id.append(
    `<div 
      data-testid="test-scale"
      class="
        slider__scale-numbers
        js-slider__scale-numbers
      "
      style="
        height:${height}px;
        width:${width}px;
        top:${top}px;
        left: ${left}px;
        grid-template-${columnOrRow}:repeat(${lineQuantity}, 1fr)
      "
    >
    </div>`,
  );
}

const createScaleLines = (
  {
    $scaleLines, lineQuantity, orientation,
    minMax, smallLine, bigLine, step, stepMultiplier,
  }:CreateScaleLinesArgs,
):void => {
  for (let i = 0; i < 2 * lineQuantity - 1; i += 1) {
    if (i % 2) {
      $scaleLines.append(
        `<div 
            class="
              slider__scale-line
              slider__scale-line_${orientation}
              js-slider__scale-line
              " 
            style="
            position: absolute;
            ${smallLine};
            left: ${((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i / 2)}%;"
          >
          </div>`,
      );
    } else {

      $scaleLines.append(
        `<div
            class="
              slider__scale-line
              slider__scale-line_${orientation}
              js-slider__scale-line
            "
            style="${bigLine};
            position: absolute;
            left: ${((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i / 2)}%;"
          ></div>`,
      );
    }
  }
};

const createScaleNumbers = (
  {
    $scaleNumbers,
    minMax,
    divisionNumber,
    lineQuantity,
    stepSignAfterComma,
    switcher,
    lastOrFirstIterration,
    isVertical,
    stepMultiplier,
    step,
    scaleSignAfterComma,
  }:CreateScaleNumbersArgs,
):void => {
  for (let i = 0; i < lineQuantity; i += 1) {
    if (i === lastOrFirstIterration) {
      $scaleNumbers.append(
        `<div
          class="
            slider__scale-number
            js-slider__scale-number
          "
        >${minMax[1].toFixed(Math.min(2, stepSignAfterComma))}
        </div>`,
      );
    } else if (isVertical) {
      $scaleNumbers.append(
        `<div
          class="
            slider__scale-number
            js-slider__scale-number
          "
        >${(minMax[1] * switcher - (minMax[0] * (1 - switcher) + i * divisionNumber)).toFixed(Math.min(1, scaleSignAfterComma))}
        </div>`,
      );
    } else {
      
      $scaleNumbers.append(
        `<div
          class="
            slider__scale-number
            js-slider__scale-number
          "
        >${(minMax[0] + i * step * stepMultiplier).toFixed(Math.min(1, scaleSignAfterComma))}
        </div>`,
      );
    }
  }
};

export {
  createScaleLinesBox, createScaleNumbersBox, createScaleLines, createScaleNumbers,
};
