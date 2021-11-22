/* eslint-disable @typescript-eslint/dot-notation */
// import '../index.scss';
import './panel/panel.scss';
import Slider from '../Slider';
import Panel from './panel/Panel';
import checkValues from '../presenter/presenterModules/checkValues';
import { BuildParams, BuildParamsBeforeChecking } from '../initializeTypes';

const jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

class DemoSlider {
  public id: string;

  public checkedParams: BuildParams;

  public panel: Panel;

  public slider: Slider;

  constructor(id:string, params:BuildParamsBeforeChecking) {
    this.id = id;
    this.checkedParams = checkValues(params);
    this.panel = new Panel(id, this.checkedParams, this);
    this.slider = new Slider(id, this.setCallback());
    this.activatePanel(this.checkedParams);
  }

  public setCallback() {
    this.checkedParams.onChange = this.handleChange.bind(this);
    return this.checkedParams;
  }

  public activatePanel(params: BuildParams): this {
    this.panel.activatePanel.call(this.panel, params);
    return this;
  }

  public handleChange(params:BuildParamsBeforeChecking) {
    this.rebuildPanel(params);
  }

  public rebuildPanel(params:BuildParamsBeforeChecking):void {
    this.checkedParams = checkValues(params);
    this.panel.initializePanel(this.checkedParams);
  }

  public rebuild(params:BuildParamsBeforeChecking):void {
    this.checkedParams = checkValues(params);
    this.checkedParams = this.setCallback();
    this.panel.initializePanel(this.checkedParams);
    this.slider.presenter.rebuild(this.checkedParams);
  }

  private removeListeners(id:string): this {
    this.panel.removeListeners(id);

    return this;
  }
}
/* eslint-disable @typescript-eslint/no-unused-vars */

const firstSlider = new DemoSlider('first', {
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

const secondSlider = new DemoSlider('second', {
  shouldAddTip: true,
  shouldAddBar: true,
  step: 0.003,
  maxValue: 0.152,
  minValue: -0.751,
  isRange: true,
  shouldAddScale: true,
  runnerSize: [12, 24],
  runnersInstantPosition: [9, 14],
  hasInputPanel: true,
});

const thirdSlider = new DemoSlider('third', {
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

const fourthSlider = new DemoSlider('fourth', {
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

export default DemoSlider;
