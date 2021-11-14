import clearHTMLElement from './clearHTMLElement';
import activatePanel from './activate';
import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import SliderView from '../SliderView';
import notifyInputChange from './notifyInputChange';
import updateRunnerInput from './updateRunnerInput';

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

  public activatePanel: (this: Panel, params: PresenterBuildParams) => void;

  public clearHTMLElement: (this: Panel, id:string) => void;

  public notifyInputChange: (this: Panel, runnersInstantPosition: number[]) => void;

  public updateRunnerInput: (this: Panel, stepValue:number, instance:number) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.activatePanel = activatePanel.bind(this) as () => void;
    this.clearHTMLElement = clearHTMLElement.bind(this) as () => void;
    this.notifyInputChange = notifyInputChange.bind(this) as () => void;
    this.updateRunnerInput = updateRunnerInput.bind(this) as () => void;
  }
}
