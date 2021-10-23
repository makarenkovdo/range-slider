/* eslint-env jquery */

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
}) => {
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

const calcLengthOfRangeBar = (slidersPosition) => Math.abs(slidersPosition[1] - slidersPosition[0]);

const updateSingleVerticalBarPosition = (activeSlider, $bar) => {
  $bar
    .css('height', `${activeSlider.stepPosition}%`)
    .css('top', `${100 - activeSlider.stepPosition}%`);
};

const updateSingleHorizontalBarPosition = (activeSlider, $bar) => {
  $(document).ready(() => $bar.css('width', `${activeSlider.stepPosition}%`));
};

const updateRangeBarPosition = (index, activeSlider, $bar, slidersPosition, barLength) => {
  const positioningSwitcher = [
    ['left', 'width'],
    ['top', 'height'],
  ];

  //  helpVariable for rotation left/top value
  const positionAndLengthSwitcher = [Math.abs(100 * index - slidersPosition[index]), barLength];

  positioningSwitcher[index].forEach((v, i) => {
    $bar.css(`${v}`, positionAndLengthSwitcher[i] + '%');
  });
};

export {
  defineBarType,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
};
