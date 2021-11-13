/* eslint-disable padded-blocks */

import initializeValues from './initialize/initializeValues';
import initStartEnd from './initialize/initStartEnd';
import handleClick from './events/handleClick';
import handleDrag from './events/handleDrag';
import handleDrop from './events/handleDrop';
import notifyFieldClick from './notifiers/notifyFieldClick';
import notifySliderMoving from './notifiers/notifySliderMoving';
import setStep from './initialize/setStep';

import FieldModel from '../model/FieldModel';
import SliderPresenter from '../presenter/SliderPresenter.js';
import RunnerModel from '../model/RunnerModel';

import { Orientation } from '../presenter/presenterInterfaces';
import Panel from './panel/Panel';
import Bar from './bar/Bar';
import Runner from './runner/Runner';
import Scale from './scale/Scale';
import Tip from './tip/Tip';

export default class SliderView {
  public id: string;

  public $body: JQuery<HTMLElement>;

  public isVertical: boolean;

  public orientation: Orientation;

  public isRange: boolean;

  public hasBar: boolean;

  public fieldSize: number[];

  public minMax: number[];

  readonly $field: JQuery<HTMLElement>;

  readonly subscriber: SliderPresenter;

  public corrector: number;

  public hasScale: boolean;

  public hasTip: boolean;

  public lengthInStep: number;

  public borderWidth: number;

  private class: string;

  public initializeValues: (
    runnerSize: number[],
    fieldThickness:number,
    orientation: Orientation,
  ) => void;

  public panel: Panel;

  public bar: Bar;

  public runner: Runner;

  public scale: Scale;

  public tip: Tip;

  public initStartEnd: (minValue: number, maxValue: number) => void;

  public handleDrag: (this: SliderView, runnerInstance: number) => void;

  public handleDrop: (this: SliderView) => void;

  public handleClick: (this: SliderView, runners: RunnerModel[], field: FieldModel) => void;

  public handleInputsChange: (this: SliderView) => void;

  public notifySliderMoving: (cursorXY: number[], instance: number) => void;

  public notifyFieldClick: (cursorXY: number[]) => void;

  public notifyInputChange: (this: SliderView, runnersInstantPosition: number[]) => void;

  public setStep: (step:number, stepSignAfterComma:number) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.id = id;
    this.$body = $('body');
    this.$field = $(`#${id}`);
    this.class = $(`#${id}`).attr('class');
    this.isVertical = false;
    this.isRange = false;
    this.hasBar = false;
    this.hasScale = false;
    this.hasTip = false;
    this.orientation = 'horizontal';
    this.fieldSize = [];
    this.borderWidth = 1;
    this.minMax = [];
    this.lengthInStep = 1;
    this.corrector = 0;
    this.subscriber = subscriber;

    this.panel = new Panel(this);
    this.bar = new Bar(this);
    this.runner = new Runner(this);
    this.scale = new Scale(this);
    this.tip = new Tip(this);

    this.initializeValues = initializeValues.bind(this) as () => void;
    this.handleDrag = handleDrag.bind(this) as () => void;
    this.handleDrop = handleDrop.bind(this) as () => void;
    this.handleClick = handleClick.bind(this) as () => void;
    // this.handleInputsChange = handleInputsChange.bind(this) as () => void;
    this.notifySliderMoving = notifySliderMoving.bind(this) as () => void;
    this.notifyFieldClick = notifyFieldClick.bind(this) as () => void;
    // this.notifyInputChange = notifyInputChange.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
    this.setStep = setStep as () => void;
  }
}
