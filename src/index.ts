/* eslint-disable @typescript-eslint/no-unused-vars */
import './index.scss';
import './panel.scss';
import SliderPresenter from './presenter/SliderPresenter';

const firstSlider = new SliderPresenter('first', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 2,
  maxValue: 17.2,
  minValue: 9.1,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [9, 14],
  hasInputPanel: true,
  orientation: 'horizontal',
});

const secondSlider = new SliderPresenter('second', {
  step: 2,
  maxValue: -1,
  minValue: 4,
  shouldAddTip: true,
  shouldAddBar: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [0, 5],
  hasInputPanel: true,
  orientation: 'horizontal',
});

const thirdSlider = new SliderPresenter('third', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 4,
  maxValue: 16,
  minValue: -16,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [0, 8 ],
  hasInputPanel: true,
  orientation: 'horizontal',
});

const fourthSlider = new SliderPresenter('fourth', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 0.07,
  maxValue: 0,
  minValue: 16,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [0, 8 ],
  hasInputPanel: true,
  orientation: 'horizontal',
});

// const secondRunner = new SliderPresenter('second', {
//   shouldAddTip: true,
//   shouldAddBar: true,
//   step: 10,
//   isRange: true,
//   shouldAddScale: true,
//   orientation: 'vertical',
//   minValue: -10,

// });

// const thirdRunner = new SliderPresenter('third', {
//   shouldAddTip: true,
//   shouldAddBar: true,
//   maxValue: 10,
//   minValue: -11,
//   shouldAddScale: true,

// });

// const fourthRunner = new SliderPresenter('fourth', {
//   shouldAddTip: true,
//   shouldAddBar: true,
//   maxValue: 10,
//   shouldAddScale: true,
//   orientation: 'vertical',

// });

// const fifthRunner = new SliderPresenter('fifth', {
//   minValue: 20,
//   maxValue: 35,
//   shouldAddTip: true,
//   shouldAddBar: true,
//   shouldAddScale: true,

// });
// const sixthRunner = new SliderPresenter('sixth', {
//   minValue: 0,
//   maxValue: 1,
//   step: 0.001,
//   shouldAddTip: true,
//   shouldAddScale: true,

// });

// const seventhRunner = new SliderPresenter('seventh', {
//   minValue: 7,
//   maxValue: 14,
//   step: 0.01,
//   shouldAddTip: true,
//   shouldAddScale: true,
//   orientation: 'vertical',
// });
