import clearHTMLElement from './clearHTMLElement';
import activatePanel from './activate';
import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import SliderView from '../SliderView';
import notifyInputChange from './notifyInputChange';
import updateRunnerInput from './updateRunnerInput';
import { initializePanel } from './activate/activateUtility';

export default class Panel {
  parent: SliderView;

  public $minValueInput: HTMLInputElement;

  public $maxValueInput: HTMLInputElement;

  public $runnerWidthInput: HTMLInputElement;

  public $runnerHeightInput: HTMLInputElement;

  public $fieldThicknessInput: HTMLInputElement;

  public $stepInput: HTMLInputElement;

  public $isRangeInput: HTMLInputElement;

  public $orientationInput: HTMLInputElement;

  public $hasScaleInput: HTMLInputElement;

  public $hasBarInput: HTMLInputElement;

  public $hasTipInput: HTMLInputElement;

  public $runner0ValueInput: HTMLInputElement;

  public $runner1ValueInput: HTMLInputElement;

  public minMax: number[];

  public runnerSize: number[];

  public fieldThickness: number;

  public step: number;

  public isRange: boolean;

  public orientation: 'vertical' | 'horizontal';

  public hasScale: boolean;

  public hasBar: boolean;

  public hasTip: boolean;

  public runnersPosition: number[];

  public activatePanel: (this: Panel, params: PresenterBuildParams) => void;

  public clearHTMLElement: (this: Panel, id:string) => void;

  public initializePanel: (this: Panel, params: PresenterBuildParams) => void;

  public notifyInputChange: (this: Panel, runnersInstantPosition: number[]) => void;

  public updateRunnerInput: (this: Panel, stepValue:number, instance:number) => void;

  constructor(view: SliderView) {
    this.parent = view;
    // this.orientation = view.orientation;
    // this.minMax = view.minMax;
    // this.isRange = view.isRange;
    // this.fieldThickness = view.fieldThickness;
    // this.hasBar = view.hasBar;
    // this.hasScale = view.hasScale;
    // this.hasTip = view.hasTip;
    // this.runnersPosition = view.runner.positions;
    // this.runnerSize = view.runner.size;
    // this.step = view.runner.step;
    this.activatePanel = activatePanel.bind(this) as () => void;
    this.clearHTMLElement = clearHTMLElement.bind(this) as () => void;
    this.initializePanel = initializePanel.bind(this) as () => void;
    this.notifyInputChange = notifyInputChange.bind(this) as () => void;
    this.updateRunnerInput = updateRunnerInput.bind(this) as () => void;
  }
}
