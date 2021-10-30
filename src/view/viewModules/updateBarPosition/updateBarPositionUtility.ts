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
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
}: DefineBarKindArgsType): void => {
  if (isRange && isVertical) {
    updateRangeBarPosition(
      NumbersEnum.one, // todo enum
      $bar,
      runnersPosition,
      calcLengthOfRangeBar(runnersPosition),
    );
  }
  if (isRange && !isVertical) {
    updateRangeBarPosition(
      NumbersEnum.zero,
      $bar,
      runnersPosition,
      calcLengthOfRangeBar(runnersPosition),
    );
  }
  if (!isRange && isVertical) updateSingleVerticalBarPosition(runnersPosition, $bar);
  if (!isRange && !isVertical) updateSingleHorizontalBarPosition(runnersPosition, $bar);

  return this;
};

// prettier-ignore
const calcLengthOfRangeBar = (runnersPosition: number[]): number => Math.abs(runnersPosition[1]
  - runnersPosition[0]);

const updateSingleVerticalBarPosition = (
  runnersPosition: number[],
  $bar: JQuery<HTMLElement>,
): void => {
  $bar.css('height', `${runnersPosition[0]}%`).css('top', `${100 - runnersPosition[0]}%`);
};

const updateSingleHorizontalBarPosition = (
  runnersPosition: number[],
  $bar: JQuery<HTMLElement>,
): void => {
  $(document).ready(() => $bar.css('width', `${runnersPosition[0]}%`));
};

const updateRangeBarPosition = (
  index: NumbersEnum,
  $bar: JQuery<HTMLElement>,
  runnersPosition: number[],
  barLength: number,
): void => {
  const positioningSwitcher = [
    ['left', 'width'],
    ['top', 'height'],
  ];

  //  helpVariable for rotation left/top with width/height value

  const positionAndLengthSwitcher = [Math.abs(100 * index - runnersPosition[index]), barLength];
  console.log('BAR', runnersPosition, barLength);

  positioningSwitcher[index].forEach((v, i) => {
    $bar.css(`${v}`, `${positionAndLengthSwitcher[i]}%`);
  });
};

export {
  defineBarKind,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
};
