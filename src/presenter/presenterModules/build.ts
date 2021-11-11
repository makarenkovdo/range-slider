import SliderPresenter from "../SliderPresenter";

const initialBuild = function buildSliderWithInitialPararameters(this:SliderPresenter) {
  this.setMinMax(minValue, maxValue)
    .initLayers(runnerSize, fieldThickness, orientation)
    .createRangeSlider({
      isRange,
      shouldAddTip,
      runnerSize,
      minValue,
      maxValue,
      runnersInstantPosition,
    })
    .setStep(step)
    .createBar(shouldAddBar)
    .createScale(shouldAddScale)
    .updateTipNumber(minValue, 0)
    .updateTipNumber(maxValue, 1)
    .onClick();
};
