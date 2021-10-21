/* eslint-disable @typescript-eslint/no-unused-vars */
import SliderController from './controller/slider-controller';

const firstSlider = new SliderController('first', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 0.1,
  maxValue: 17,
  isRange: true,
});

const secondSlider = new SliderController('second', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 10,
  isRange: true,
});

const thirdSlider = new SliderController('third', {
  shouldAddTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fourthSlider = new SliderController('fourth', {
  shouldAddTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fifthSlider = new SliderController('fifth', {
  minValue: 20,
  maxValue: 35,
});
