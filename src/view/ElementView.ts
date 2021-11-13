/* eslint-disable padded-blocks */
import initializeValues from './initialize/initializeValues';
import initStartEnd from './initialize/initStartEnd';
import setStep from './initialize/setStep';
import SliderPresenter from '../presenter/SliderPresenter.js';
import { Orientation, PresenterBuildParams } from '../presenter/presenterInterfaces';

export default class ElementView {
  public id: string;

  public $body: JQuery<HTMLElement>;

  public $runners: JQuery<HTMLElement>[];

  public $bar: JQuery<HTMLElement>;

  public isVertical: boolean;

  public orientation: Orientation;

  public isRange: boolean;

  public hasBar: boolean;

  public runnersPosition: number[];

  public runnerSize: number[];

  public fieldSize: number[];

  public minMax: number[];

  readonly $field: JQuery<HTMLElement>;

  readonly subscriber: SliderPresenter;

  public cursorXY: number[];

  public corrector: number;

  public activeInstance: number;

  public isZIndexUpdated: boolean;

  public hasScale: boolean;

  public hasTip: boolean;

  public step: number;

  public stepSignAfterComma: number;

  public lengthInStep: number;

  public borderWidth: number;

  private class: string;

  public initializeValues: (
    runnerSize: number[],
    fieldThickness:number,
    orientation: Orientation,
  ) => void;

  public initStartEnd: (minValue: number, maxValue: number) => void;

  public setStep: (step:number, stepSignAfterComma:number) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.id = id;
    this.$body = $('body');
    this.$field = $(`#${id}`);
    this.$runners = [];
    // this.$bar = '';
    this.class = $(`#${id}`).attr('class');
    this.isVertical = false;
    this.isRange = false;
    this.hasBar = false;
    this.hasScale = false;
    this.hasTip = false;
    this.orientation = 'horizontal';
    this.runnersPosition = [0, 100];
    this.fieldSize = [];
    this.runnerSize = [];
    this.borderWidth = 1;
    this.minMax = [];
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.lengthInStep = 1;
    this.corrector = 0;
    this.cursorXY = [0, 0];
    this.activeInstance = 0;
    this.isZIndexUpdated = false;
    this.subscriber = subscriber;

    this.initializeValues = initializeValues.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
    this.setStep = setStep as () => void;
  }
}
