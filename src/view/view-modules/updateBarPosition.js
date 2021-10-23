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

const calcLengthOfRangeBar = (slidersPosition) => {
  return Math.abs(slidersPosition[1] - slidersPosition[0]);
};

const updateSingleVerticalBarPosition = (activeSlider, $bar) => {
  $bar
    .css('height', `${activeSlider.stepPosition}%`)
    .css('top', `${100 - activeSlider.stepPosition}%`);
};

const updateSingleHorizontalBarPosition = (activeSlider, $bar) => {
  $bar.css('width', `${activeSlider.stepPosition}%`);
};

const updateRangeBarPosition = (index, activeSlider, $bar, slidersPosition, barLength) => {
  const positioningSwitcher = [
    ['left', 'width'],
    ['top', 'height'],
  ];

  /*  barPosesArray = [[instance0-left,instance1-left],[instance0-top,instance1-top]]
        for horizontal and vertical sliders accordingly */
  // prettier-ignore
  //   const barPosesArray = positioningSwitcher.map((v1, i1, arr) => (arr.map((v2, i2) => parseInt($(`#${id}`).children(`.instance-${i2}`).css(`${v1[0]}`), 10))));
  //   const slidersPositions =
  //   //  barSize = [horizontalSliderWidth,verticalSliderHeight]
  //   const barSize = barPosesArray.map((v) => Math.abs(v[1] - v[0]));

  //  helpVariable for rotation left/top value
  const positionAndLengthSwitcher = [slidersPosition[0], barLength];
  console.log(positionAndLengthSwitcher);

  positioningSwitcher[index].forEach(
    (v, i) => {
      $bar.css(
        `${v}`,
        // positionAndLengthSwitcher[i] + (this.$slider.width() / 2) * !i,
        positionAndLengthSwitcher[i] + (40 / 2) * !i + '%',

        //    shift on half a width WHEN it's a LEFT(TOP) position of instance-0
      );
    },

    //    left&width OR top&height depending on index
  );
};

export {
  defineBarType,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
};
