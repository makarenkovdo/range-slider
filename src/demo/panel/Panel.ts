import clearHTMLElement from '../../view/clearHTMLElement';
import activatePanel from './activate';
import { BuildParams } from '../../presenter/presenterInterfaces';
import notifyInputChange from './notifyInputChange';
// import updateRunnerInput from '../../view/input/updateRunnerInput';
import { handleChange, initializePanel } from './activate/activateUtility';
import removeListeners from './removeListeners';
import DemoSlider from '../DemoSlider';

export default class Panel {
  public parent: DemoSlider;

  public id: string;

  public $minValueInput: HTMLInputElement | null;

  public $maxValueInput: HTMLInputElement | null;

  public $runnerWidthInput: HTMLInputElement | null;

  public $runnerHeightInput: HTMLInputElement | null;

  public $fieldThicknessInput: HTMLInputElement | null;

  public $stepInput: HTMLInputElement | null;

  public $isRangeInput: HTMLInputElement | null;

  public $orientationInput: HTMLInputElement | null;

  public $hasScaleInput: HTMLInputElement | null;

  public $hasBarInput: HTMLInputElement | null;

  public $hasTipInput: HTMLInputElement | null;

  public $runner0ValueInput: HTMLInputElement | null;

  public $runner1ValueInput: HTMLInputElement | null;

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

  public activatePanel: (this: Panel, params: BuildParams) => void;

  public clearHTMLElement: (this: Panel, id:string) => void;

  public initializePanel: (this: Panel, params: BuildParams) => void;

  public handleChange: (this: Panel, event:Event, actionType: string) => void;

  public notifyInputChange: (this: Panel) => void;

  public removeListeners: (id:string) => void;

  // public updateRunnerInput: (this: Panel, stepValue:number, instance:number) => void;

  constructor(id:string, params: BuildParams, demoSlider: DemoSlider) {
    this.parent = demoSlider;
    this.id = id;
    this.$minValueInput = null;
    this.$fieldThicknessInput = null;
    this.$hasBarInput = null;
    this.$hasScaleInput = null;
    this.$hasTipInput = null;
    this.$isRangeInput = null;
    this.$maxValueInput = null;
    this.$orientationInput = null;
    this.$runner0ValueInput = null;
    this.$runner1ValueInput = null;
    this.$runnerHeightInput = null;
    this.$runnerWidthInput = null;
    this.$stepInput = null;
    this.hasBar = params.shouldAddBar;
    this.hasScale = params.shouldAddScale;
    this.hasTip = params.shouldAddTip;
    this.isRange = params.isRange;
    this.fieldThickness = params.fieldThickness;
    this.minMax = [params.minValue, params.maxValue];
    this.orientation = params.orientation;
    this.runnerSize = params.runnerSize;
    this.runnersPosition = params.runnersInstantPosition;
    this.step = params.step;
    this.activatePanel = activatePanel.bind(this) as () => void;
    this.clearHTMLElement = clearHTMLElement.bind(this) as () => void;
    this.initializePanel = initializePanel.bind(this) as () => void;
    this.notifyInputChange = notifyInputChange.bind(this) as () => void;
    // this.updateRunnerInput = updateRunnerInput.bind(this) as () => void;
    this.removeListeners = removeListeners;
    this.handleChange = handleChange.bind(this) as () => void;
  }
}
