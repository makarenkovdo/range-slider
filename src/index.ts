/* eslint-disable @typescript-eslint/no-unused-vars */
import SliderController from './controller/slider-controller';

const firstSlider = new SliderController('first', {
  switchOnTip: true,
  shouldAddBar: true,
  step: 0.1,
  maxValue: 17,
  isRange: true,
});

const secondSlider = new SliderController('second', {
  switchOnTip: true,
  shouldAddBar: true,
  step: 10,
  isRange: true,
});

const thirdSlider = new SliderController('third', {
  switchOnTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fourthSlider = new SliderController('fourth', {
  switchOnTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fifthSlider = new SliderController('fifth', {
  switchOnTip: true,
  shouldAddBar: true,
  minValue: 20,
  maxValue: 35,
});
