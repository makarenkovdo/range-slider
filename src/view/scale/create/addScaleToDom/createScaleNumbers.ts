import { CreateScaleNumbersArgs } from '../../../viewInterfaces';

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
    orientation,
  }:CreateScaleNumbersArgs,
):void => {
  const positioning = orientation === 'vertical' ? 'top' : 'left';

  for (let i = 1; i < lineQuantity + 1; i += 1) {
    const leftOrTopPosition = ((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i);
    const viewNumber = (
      minMax[0] + i * step * stepMultiplier
    ).toFixed(Math.min(2, stepSignAfterComma));
    const viewNumberAligning = viewNumber.length * 2 * onePxInPercent;

    if ((100 - leftOrTopPosition) / onePxInPercent > 30) {
      if (isVertical) {
        $scaleNumbers.append(
          `<div
            class="
              slider__scale-number
              js-slider__scale-number
            "
            style="
            left: 5px;
            top: ${leftOrTopPosition - 0.5}%;
            position: absolute;
  
            "

          >${(minMax[1] - ( i * step * stepMultiplier)).toFixed(Math.min(2, stepSignAfterComma))}
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
            left: ${leftOrTopPosition - viewNumberAligning}%;
            position: absolute;
  
            "
            
          >${(minMax[0] + i * step * stepMultiplier).toFixed(Math.min(2, stepSignAfterComma))}
          </div>`,
        );
      }
    }
  }
  if (isVertical) {
    $scaleNumbers.append(
      `<div
          class="
            slider__scale-number
            js-slider__scale-number
          "
          style="
          left: 5px;
          ${positioning}: 99.5%;
          position: absolute;

          "
          
        >${(minMax[0])}
        </div>`,
    );
    $scaleNumbers.append(
      `<div
          class="
            slider__scale-number
            js-slider__scale-number
          "
          style="
          left: 5px;
          ${positioning}: -0.5%;
          position: absolute;

          "
          
        >${(minMax[1])}
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
          ${positioning}: 100%;
          position: absolute;

          "
          
        >${(minMax[1])}
        </div>`,
    );
    $scaleNumbers.append(
      `<div
          class="
            slider__scale-number
            js-slider__scale-number
          "
          style="
          ${positioning}: 0%;
          position: absolute;

          "
          
        >${(minMax[0])}
        </div>`,
    );
  }
};

export default createScaleNumbers;
