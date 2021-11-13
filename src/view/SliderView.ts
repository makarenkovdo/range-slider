/* eslint-disable padded-blocks */

import clearHTMLElement from './panel/clearHTMLElement';
import createBar from './bar/createBar';
import createScale from './scale/createScale';
import createRunner from './runner/createRunner';
import createTipNumber from './tip/createTipNumber';
import initializeValues from './initialize/initializeValues';
import initStartEnd from './initialize/initStartEnd';
import handleClick from './events/handleClick';
import handleDrag from './events/handleDrag';
import handleDrop from './events/handleDrop';
import notifyFieldClick from './notifiers/notifyFieldClick';
import notifySliderMoving from './notifiers/notifySliderMoving';
import notifyInputChange from './notifiers/notifyInputChange';
import setStep from './initialize/setStep';
import updateTipNumber from './tip/updateTipNumber';
import updateBarPosition from './bar/updateBarPosition';
import updateRunnerPosition from './runner/updateRunnerPosition';
import updateZIndex from './runner/updateZIndex';

import FieldModel from '../model/FieldModel';
import SliderPresenter from '../presenter/SliderPresenter.js';
import RunnerModel from '../model/RunnerModel';

import { UpdateTipNumberArgs } from './viewInterfaces';

import { Orientation, PresenterBuildParams } from '../presenter/presenterInterfaces';
import activatePanel from './panel/activatePanel';

export default class SliderView {
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

  public activatePanel: (params: PresenterBuildParams) => void;

  public createBar: (presenter: SliderPresenter) => void;

  public createRunner: (this:SliderView,
    i: number,
    stepPosition:number,
  ) => void;

  public createTipNumber: (runnerCounter: number,
    isVertical: boolean,
    stepPosition:number,
    stepValue:number,
  ) => void;

  public createScale: (this: SliderView) => void;

  public clearHTMLElement: (this: SliderView) => void;

  public initializeValues: (
    runnerSize: number[],
    fieldThickness:number,
    orientation: Orientation,
  ) => void;

  public initStartEnd: (minValue: number, maxValue: number) => void;

  public handleDrag: (this: SliderView, runnerInstance: number) => void;

  public handleDrop: (this: SliderView) => void;

  public handleClick: (this: SliderView, runners: RunnerModel[], field: FieldModel) => void;

  public handleInputsChange: (this: SliderView) => void;

  public notifySliderMoving: (cursorXY: number[], instance: number) => void;

  public notifyFieldClick: (cursorXY: number[]) => void;

  public notifyInputChange: (this: SliderView, runnersInstantPosition: number[]) => void;

  public setStep: (step:number, stepSignAfterComma:number) => void;

  public updateBarPosition: (this: SliderView) => void;

  public updateTipNumber: (args: UpdateTipNumberArgs) => void;

  public updateRunnerPosition: (this: SliderView, stepPosition: number, instance: number) => void;

  public updateZIndex: (this: SliderView, i: number) => void;

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

    this.activatePanel = activatePanel.bind(this) as () => void;
    this.createBar = createBar.bind(this) as () => void;
    this.createRunner = createRunner.bind(this) as () => void;
    this.createTipNumber = createTipNumber.bind(this) as () => void;
    this.createScale = createScale.bind(this) as () => void;
    this.clearHTMLElement = clearHTMLElement.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
    this.updateTipNumber = updateTipNumber.bind(this) as () => void;
    this.updateRunnerPosition = updateRunnerPosition.bind(this) as () => void;
    this.updateZIndex = updateZIndex.bind(this) as () => void;
    this.initializeValues = initializeValues.bind(this) as () => void;
    this.handleDrag = handleDrag.bind(this) as () => void;
    this.handleDrop = handleDrop.bind(this) as () => void;
    this.handleClick = handleClick.bind(this) as () => void;
    // this.handleInputsChange = handleInputsChange.bind(this) as () => void;
    this.notifySliderMoving = notifySliderMoving.bind(this) as () => void;
    this.notifyFieldClick = notifyFieldClick.bind(this) as () => void;
    this.notifyInputChange = notifyInputChange.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
    this.setStep = setStep as () => void;
  }
}
