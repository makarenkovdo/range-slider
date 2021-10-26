import SliderModel from '../../../model/slider-model';
import { DefineBarKindArgsType } from '../../viewInterfaces';

enum NumbersEnum {
  one = 1,
  zero = 0,
}
/* eslint-env jquery */
//  defineBarType rename to defineBarKind!
const defineBarType = ({
  isRange,
  activeSlider,
  isVertical,
  $bar,
  slidersPosition,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
}: DefineBarKindArgsType): void => {
  if (isRange && isVertical) {
    updateRangeBarPosition(
      NumbersEnum.one, // todo enum
      activeSlider,
      $bar,
      slidersPosition,
      calcLengthOfRangeBar(slidersPosition),
    );
  }
  if (isRange && !isVertical) {
    updateRangeBarPosition(
      NumbersEnum.zero,
      activeSlider,
      $bar,
      slidersPosition,
      calcLengthOfRangeBar(slidersPosition),
    );
  }
  if (!isRange && isVertical) updateSingleVerticalBarPosition(activeSlider, $bar);
  if (!isRange && !isVertical) updateSingleHorizontalBarPosition(activeSlider, $bar);

  return this;
};

// prettier-ignore
const calcLengthOfRangeBar = (slidersPosition: number[]): number => Math.abs(slidersPosition[1]
  - slidersPosition[0]);

const updateSingleVerticalBarPosition = (
  activeSlider: SliderModel,
  $bar: JQuery<HTMLElement>,
): void => {
  $bar
    .css('height', `${activeSlider.stepPosition}%`)
    .css('top', `${100 - activeSlider.stepPosition}%`);
};

const updateSingleHorizontalBarPosition = (
  activeSlider: SliderModel,
  $bar: JQuery<HTMLElement>,
): void => {
  $(document).ready(() => $bar.css('width', `${activeSlider.stepPosition}%`));
};

const updateRangeBarPosition = (
  index: NumbersEnum,
  activeSlider: SliderModel,
  $bar: JQuery<HTMLElement>,
  slidersPosition: number[],
  barLength: number,
): void => {
  const positioningSwitcher = [
    ['left', 'width'],
    ['top', 'height'],
  ];

  //  helpVariable for rotation left/top value
  const positionAndLengthSwitcher = [Math.abs(100 * index - slidersPosition[index]), barLength];

  positioningSwitcher[index].forEach((v, i) => {
    $bar.css(`${v}`, `${positionAndLengthSwitcher[i]}%`);
  });
};

export {
  defineBarType,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
};
