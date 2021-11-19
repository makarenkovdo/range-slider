import { DefineBarKindArgsType } from '../../viewInterfaces';

enum NumbersEnum {
  zero = 0,
  one = 1,
}
/* eslint-env jquery */
const defineBarKind = ({
  isRange,
  isVertical,
  $bar,
  runnersPosition,
  fieldThickness,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
}: DefineBarKindArgsType): void => {
  if (isRange && isVertical) {
    updateRangeBarPosition(
      NumbersEnum.one,
      $bar,
      runnersPosition,
      fieldThickness,
      calcLengthOfRangeBar(runnersPosition),
    );
  }
  if (isRange && !isVertical) {
    updateRangeBarPosition(
      NumbersEnum.zero,
      $bar,
      runnersPosition,
      fieldThickness,
      calcLengthOfRangeBar(runnersPosition),
    );
  }
  if (!isRange && isVertical) {
    updateSingleVerticalBarPosition(
      runnersPosition,
      fieldThickness,
      $bar,
    );
  }
  if (!isRange && !isVertical) {
    updateSingleHorizontalBarPosition(
      runnersPosition,
      fieldThickness,
      $bar,
    );
  }

  return this;
};

const calcLengthOfRangeBar = (runnersPosition: number[]): number => Math.abs(runnersPosition[1]
  - runnersPosition[0]);

const updateSingleVerticalBarPosition = (
  runnersPosition: number[],
  fieldThickness: number,
  $bar: JQuery<HTMLElement>,
): void => {
  $(document).ready(() => {
    $bar.css('height', `${runnersPosition[0]}%`).css('top', `${100 - runnersPosition[0]}%`);
    $bar.css('width', `${fieldThickness}px`);
  });
};

const updateSingleHorizontalBarPosition = (
  runnersPosition: number[],
  fieldThickness: number,
  $bar: JQuery<HTMLElement>,
): void => {
  $(document).ready(() => {
    $bar.css('width', `${runnersPosition[0]}%`);
    $bar.css('height', `${fieldThickness}px`);
  });
};

const updateRangeBarPosition = (
  index: NumbersEnum,
  $bar: JQuery<HTMLElement>,
  runnersPosition: number[],
  fieldThickness: number,
  barLength: number,
): void => {
  $(document).ready(() => {
    const positioningSwitcher = [
      ['left', 'width'],
      ['top', 'height'],
    ];
    const barBeginningPosition = Math.abs(100 * index - runnersPosition[index]);
    $bar.css(`${positioningSwitcher[index][0]}`, `${barBeginningPosition}%`);
    $bar.css(`${positioningSwitcher[index][1]}`, `${barLength}%`);
    const thicknessPositioningIndex = 1 - index;
    $bar.css(`${positioningSwitcher[thicknessPositioningIndex][1]}`, `${fieldThickness}px`);
  });
};

export {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
};
