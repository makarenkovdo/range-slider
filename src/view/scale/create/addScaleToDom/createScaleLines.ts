import { CreateScaleLinesArgs } from '../../../viewInterfaces';

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
  for (let i = 0; i < 2 * lineQuantity + 1; i += 1) {
    const leftPosition = ((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i / 2);
    console.log(leftPosition);
    const positioning = orientation === 'vertical' ? 'top' : 'left';

    if (leftPosition < 98) {
      if (i % 2 && i !== 2 * Math.floor(lineQuantity) + 1) {        
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
              ${positioning}: ${leftPosition}%;"
            >
            </div>`,
        );
      } else if (!(i % 2)) {
        $scaleLines.append(
          `<div
              class="
                slider__scale-line
                slider__scale-line_${orientation}
                js-slider__scale-line
              "
              style="${bigLine};
              position: absolute;
              left: ${leftPosition}%;"
            ></div>`,
        );
      }
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

export default createScaleLines;
