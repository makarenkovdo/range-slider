import { Orientation } from '../../../presenter/presenterInterfaces';
import {
  CreateScaleLinesArgs, CreateScaleLinesBoxArgs, CreateScaleNumbersArgs, CreateScaleNumbersBoxArgs,
} from '../../viewInterfaces';

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

function createScaleNumbersBox(
  {
    $id,
    lineQuantity,
    width,
    height,
    top,
    left,
    columnOrRow,
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
        "
      >
      </div>`,
  );
}

const createScaleLines = (
  {
    $scaleLines,
    lineQuantity,
    orientation,
    minMax,
    smallLine,
    bigLine,
    step,
    stepMultiplier,
    shouldAddExtraLine,

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
  if (shouldAddExtraLine) {
    $scaleLines.append(
      `<div
          class="
            slider__scale-line
            slider__scale-line_${orientation}
            js-slider__scale-line
          "
          style="${bigLine};
          position: absolute;
          left: 100%;"
        ></div>`,
    );
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
    shouldAddExtraLine
  }:CreateScaleNumbersArgs,
):void => {
  for (let i = 0; i < lineQuantity; i += 1) {
    if (isVertical) {
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
          style="
          left: ${((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i)}%;
          position: absolute;

          "
          
        >${(minMax[0] + i * step * stepMultiplier).toFixed(Math.min(1, scaleSignAfterComma))}
        </div>`,
      );
      if (shouldAddExtraLine) {
        $scaleNumbers.append(
          `<div
            class="
              slider__scale-number
              js-slider__scale-number
            "
            style="
            left: 100%;
            position: absolute;
  
            "
            
          >${(minMax[1])}
          </div>`,
        );
      }
    }
  }
};

export {
  createScaleLinesBox, createScaleNumbersBox, createScaleLines, createScaleNumbers,
};
