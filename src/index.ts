/* eslint-disable @typescript-eslint/no-unused-vars */
import './index.scss';
import './panel.scss';
import SliderPresenter from './presenter/SliderPresenter';

const firstSlider = new SliderPresenter('first', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 2,
  maxValue: -0.1,
  minValue: 0.1,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [9, 14],
  hasInputPanel: true,
  orientation: 'vertical',
});

const secondSlider = new SliderPresenter('second', {
  step: 1,
  maxValue: -10,
  minValue: 10,
  shouldAddTip: true,
  shouldAddBar: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [0, 5],
  hasInputPanel: true,
  orientation: 'vertical',
});

const thirdSlider = new SliderPresenter('third', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 4,
  maxValue: 16,
  minValue: -70,
  isRange: false,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [0, 8],
  hasInputPanel: true,
  orientation: 'vertical',
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
  runnersInstantPosition: [0, 8],
  hasInputPanel: true,
  orientation: 'vertical',
});

