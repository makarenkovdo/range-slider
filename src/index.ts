/* eslint-disable @typescript-eslint/no-unused-vars */
import RunnerController from './presenter/SliderPresenter';

const firstRunner = new RunnerController('first', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 0.1,
  maxValue: 17,
  isRange: true,
});

const secondRunner = new RunnerController('second', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 10,
  isRange: true,
});

const thirdRunner = new RunnerController('third', {
  shouldAddTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fourthRunner = new RunnerController('fourth', {
  shouldAddTip: true,
  shouldAddBar: true,
  maxValue: 10,
});

const fifthRunner = new RunnerController('fifth', {
  minValue: 20,
  maxValue: 35,
});
