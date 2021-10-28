/* eslint-disable @typescript-eslint/no-unused-vars */
import SliderPresenter from './presenter/SliderPresenter';

const firstRunner = new SliderPresenter('first', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 0.1,
  maxValue: 17,
  isRange: true,
});

const secondRunner = new SliderPresenter('second', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 10,
  isRange: true,
});

const thirdRunner = new SliderPresenter('third', {
  shouldAddTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fourthRunner = new SliderPresenter('fourth', {
  shouldAddTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fifthRunner = new SliderPresenter('fifth', {
  minValue: 20,
  maxValue: 35,
});
