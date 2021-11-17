import { CreateScaleNumbersArgs } from "../../../viewInterfaces";

const createScaleNumbers = (
  {
    $scaleNumbers,
    minMax,
    segmentInPercent,
    lineQuantity,
    stepSignAfterComma,
    switcher,
    lastOrFirstIterration,
    isVertical,
    stepMultiplier,
    step,
    scaleSignAfterComma,
    shouldAddExtraLine,
    onePxInPercent,
  }:CreateScaleNumbersArgs,
):void => {
  console.log('FINAL stepSignAfterComma', stepSignAfterComma);

  for (let i = 0; i < lineQuantity + 1; i += 1) {
    const leftPosition = ((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i);
    const viewNumber = (minMax[0] + i * step * stepMultiplier).toFixed(Math.min(2, stepSignAfterComma));
    const viewNumberLength = viewNumber.length;
    const viewNumberAligning = viewNumber.length * 2 * onePxInPercent;

    if ((100 - leftPosition) / onePxInPercent > 30) {
      if (isVertical) {
        $scaleNumbers.append(
          `<div
            class="
              slider__scale-number
              js-slider__scale-number
            "
          >${(minMax[1] * switcher - (minMax[0] * (1 - switcher) + i * segmentInPercent)).toFixed(Math.min(2, stepSignAfterComma))}
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
            left: ${leftPosition - viewNumberAligning}%;
            position: absolute;
  
            "
            
          >${(minMax[0] + i * step * stepMultiplier).toFixed(Math.min(2, stepSignAfterComma))}
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
  }
};

export default createScaleNumbers;
