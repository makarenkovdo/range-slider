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
  const positioning = orientation === 'vertical' ? 'top' : 'left';

  for (let i = 0; i < 2 * lineQuantity + 1; i += 1) {
    const topOrLeftPosition = ((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i / 2);

    if (topOrLeftPosition < 98) {
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
              ${positioning}: ${topOrLeftPosition}%;"
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
              ${positioning}: ${topOrLeftPosition}%;"
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
            ${positioning}: 100%;"
          ></div>`,
    );
    $scaleLines.append(
      `<div
            class="
              slider__scale-line
              slider__scale-line_${orientation}
              js-slider__scale-line
            "
            style="${bigLine};
            position: absolute;
            ${positioning}: 0%;"
          ></div>`,
    );
  }
};

export default createScaleLines;
