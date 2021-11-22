import initializeValues from './field/initializeValues';
import initStartEnd from './field/initStartEnd';
import handleClick from './field/handleClick';
import notifyFieldClick from './field/notifyFieldClick';
import setStep from './field/setStep';

import FieldModel from '../model/FieldModel';
import SliderPresenter from '../presenter/SliderPresenter.js';
import RunnerModel from '../model/RunnerModel';

import { Orientation } from '../presenter/presenterInterfaces';

import Bar from './bar/Bar';
import Runner from './runner/Runner';
import Scale from './scale/Scale';
import Tip from './tip/Tip';
import clearHTMLElement from './clearHTMLElement';

export default class SliderView {
  public id: string;

  public $body: JQuery<HTMLElement>;

  public isVertical: boolean;

  public orientation: Orientation;

  public isRange: boolean;

  public hasBar: boolean;

  public fieldSize: number[];

  public minMax: number[];

  public $field: JQuery<HTMLElement>;

  public subscriber: SliderPresenter;

  public corrector: number;

  public hasScale: boolean;

  public hasTip: boolean;

  public lengthInStep: number;

  public borderWidth: number;

  public fieldThickness: number;

  public class: string | undefined;

  public bar: Bar;

  public runner: Runner;

  public scale: Scale;

  public tip: Tip;

  public initializeValues: (
    runnerSize: number[],
    fieldThickness:number,
    orientation: Orientation,
  ) => void;

  public clearHTMLElement:(id:string, orientation: Orientation) => void;

  public initStartEnd: (minValue: number, maxValue: number) => void;

  public handleClick: (this: SliderView, runners: RunnerModel[], field: FieldModel) => void;

  public notifyFieldClick: (cursorXY: number[]) => void;

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
    this.fieldThickness = 6;
    this.borderWidth = 1;
    this.minMax = [];
    this.lengthInStep = 1;
    this.corrector = 0;
    this.subscriber = subscriber;

    this.bar = new Bar(this);
    this.runner = new Runner(this);
    this.scale = new Scale(this);
    this.tip = new Tip(this);

    this.clearHTMLElement = clearHTMLElement;
    this.initializeValues = initializeValues.bind(this) as () => void;
    this.handleClick = handleClick.bind(this) as () => void;
    this.notifyFieldClick = notifyFieldClick.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
    this.setStep = setStep as () => void;
  }
}
