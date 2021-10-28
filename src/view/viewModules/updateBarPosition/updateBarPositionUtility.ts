import RunnerModel from '../../../model/RunnerModel';
import { DefineBarKindArgsType } from '../../viewInterfaces';

enum NumbersEnum {
  zero = 0,
  one = 1,
}
/* eslint-env jquery */
const defineBarKind = ({
  isRange,
  activeRunner,
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
      activeRunner,
      $bar,
      runnersPosition,
      calcLengthOfRangeBar(runnersPosition),
    );
  }
  if (isRange && !isVertical) {
    updateRangeBarPosition(
      NumbersEnum.zero,
      activeRunner,
      $bar,
      runnersPosition,
      calcLengthOfRangeBar(runnersPosition),
    );
  }
  if (!isRange && isVertical) updateSingleVerticalBarPosition(activeRunner, $bar);
  if (!isRange && !isVertical) updateSingleHorizontalBarPosition(activeRunner, $bar);

  return this;
};

// prettier-ignore
const calcLengthOfRangeBar = (runnersPosition: number[]): number => Math.abs(runnersPosition[1]
  - runnersPosition[0]);

const updateSingleVerticalBarPosition = (
  activeRunner: RunnerModel,
  $bar: JQuery<HTMLElement>,
): void => {
  $bar
    .css('height', `${activeRunner.stepPosition}%`)
    .css('top', `${100 - activeRunner.stepPosition}%`);
};

const updateSingleHorizontalBarPosition = (
  activeRunner: RunnerModel,
  $bar: JQuery<HTMLElement>,
): void => {
  $(document).ready(() => $bar.css('width', `${activeRunner.stepPosition}%`));
};

const updateRangeBarPosition = (
  index: NumbersEnum,
  activeRunner: RunnerModel,
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
