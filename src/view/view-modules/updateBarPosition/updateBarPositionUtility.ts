import SliderModel from '../../../model/slider-model';

/* eslint-env jquery */
type DefineBarKindArgsType = {
  isRange: boolean;
  activeSlider: SliderModel;
  isVertical: boolean;
  $bar: JQuery<HTMLElement>;
  $field: JQuery<HTMLElement>;
  slidersPosition: number[];
  calcLengthOfRangeBar: (slidersPosition: number[]) => number;
  updateSingleVerticalBarPosition: (activeSlider: SliderModel, $bar: JQuery<HTMLElement>) => void;
  updateSingleHorizontalBarPosition: (activeSlider: SliderModel, $bar: JQuery<HTMLElement>) => void;
  updateRangeBarPosition: (
    a: number,
    activeSlider: SliderModel,
    $bar: JQuery<HTMLElement>,
    slidersPosition: number[],
    calcLengthOfRangeBar: (slidersPosition: number[]) => void,
  ) => void;
};

//  defineBarType rename to defineBarKind!
const defineBarType = ({
  isRange,
  activeSlider,
  isVertical,
  $bar,
  $field,
  slidersPosition,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
}: DefineBarKindArgsType): void => {
  if (isRange && isVertical) {
    updateRangeBarPosition(
      1,
      activeSlider,
      $bar,
      slidersPosition,
      calcLengthOfRangeBar(slidersPosition),
    );
  }
  if (isRange && !isVertical) {
    updateRangeBarPosition(
      0,
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
const calcLengthOfRangeBar = (slidersPosition: number[]): number => {
  return Math.abs(slidersPosition[1] - slidersPosition[0]);
};

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
  index: number,
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
