/* eslint-disable @typescript-eslint/dot-notation */
// import '../index.scss';
import './panel/panel.scss';
import Slider from '../Slider';
import Panel from './panel/Panel';
import { PresenterBuildParams, PresenterBuildParamsBeforeChecking } from '../presenter/presenterInterfaces';
import checkValues from '../presenter/presenterModules/checkValues';

const jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

class DemoSlider {
  public id: string;

  public checkedParams: PresenterBuildParams;

  public panel: Panel;

  public slider: Slider;

  constructor(id:string, params:PresenterBuildParamsBeforeChecking) {
    this.id = id;
    this.checkedParams = checkValues(params);
    this.panel = new Panel(id, this.checkedParams, this);
    this.slider = new Slider(id, this.checkedParams);
    this.activatePanel(this.checkedParams);
  }

  public activatePanel(params: PresenterBuildParams): this {
    this.panel.activatePanel.call(this.panel, params);
    return this;
  }

  public rebuild(params:PresenterBuildParams):void {
    // // this.field.isRange = false;
    // // this.view.isRange = false;
    // this.removeListeners(this.id);
    // this.slider['presenter']['runners'] = [];
    // this.panel.clearHTMLElement(this.id);
    // this.slider['presenter']['runnerCounter'] = 0;
    // this.slider = new Slider(this.id, params);
    this.slider.presenter.rebuild(params);
  }

  private removeListeners(id:string): this {
    this.panel.removeListeners(id);

    return this;
  }
}
/* eslint-disable @typescript-eslint/no-unused-vars */

const firstSlider = new DemoSlider('first', {
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

const secondSlider = new DemoSlider('second', {
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
