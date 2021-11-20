import './index.scss';
import './panel.scss';
import Slider from '../Slider';
import Panel from './panel/Panel';
import { PresenterBuildParams, PresenterBuildParamsBeforeChecking } from '../presenter/presenterInterfaces';
import checkValues from '../presenter/presenterModules/checkValues';

class Demo {
  public checkedParams: PresenterBuildParams;

  public panel: Panel;

  public slider: Slider;

  constructor(id:string, params:PresenterBuildParamsBeforeChecking) {
    this.checkedParams = checkValues(params);
    this.panel = new Panel(this.checkedParams);
    this.slider = new Slider(id, this.checkedParams);
  }
}
/* eslint-disable @typescript-eslint/no-unused-vars */

const firstSlider = new Demo('first', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 0.3,
  maxValue: -0.1,
  minValue: 0.7,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 24],
  runnersInstantPosition: [9, 14],
  hasInputPanel: true,
});

const secondSlider = new Demo('second', {
  step: 100000,
  maxValue: -1000000,
  minValue: 1000000,
  shouldAddTip: true,
  shouldAddBar: true,
  shouldAddScale: true,
  runnerSize: [20, 20],
  runnersInstantPosition: [0, 100000],
  fieldThickness: 10,
  hasInputPanel: true,
  orientation: 'vertical',
});

const thirdSlider = new Demo('third', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 4,
  maxValue: 16.25,
  minValue: -70,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 12],
  runnersInstantPosition: [0, 8],
  hasInputPanel: true,
  fieldThickness: 2,
  orientation: 'vertical',
});

const fourthSlider = new Demo('fourth', {
  shouldAddTip: false,
  shouldAddBar: false,
  step: 0.07,
  maxValue: -0.01,
  minValue: 16.35,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [50, 50],
  runnersInstantPosition: [0, 8],
  fieldThickness: 20,
  hasInputPanel: true,
});
