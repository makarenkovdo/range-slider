/* eslint-disable padded-blocks */
/* eslint-env jquery */
// import { addRunnerToDom, prepareRunnerArgs } from './viewModules/createSliderView';
import createBar from './viewModules/createBar';
import createRunner from './viewModules/createRunner';
import createTipNumber from './viewModules/createTipNumber';
import initializeValues from './viewModules/initializeValues';
import initStartEnd from './viewModules/initStartEnd';
import notifyFieldClick from './viewModules/notifyFieldClick';
import notifySliderMoving from './viewModules/notifySliderMoving';
import notifyInputChange from './viewModules/notifyInputChange';
import updateTipNumber from './viewModules/updateTipNumber';
import updateBarPosition from './viewModules/updateBarPosition';
import updateRunnerPosition from './viewModules/updateRunnerPosition';

import FieldModel from '../model/FieldModel';
import SliderPresenter from '../presenter/SliderPresenter.js';
import RunnerModel from '../model/RunnerModel';

import { UpdateTipNumberArgs } from './viewInterfaces';
import updateZIndex from './viewModules/updateZIndex';
import createScale from './viewModules/createScale';
import handleClick from './viewModules/handleClick';
import handleDrag from './viewModules/handleDrag';
import handleDrop from './viewModules/handleDrop';
import handleInputs from './viewModules/handleInputs';

import setStep from './viewModules/setStep';
import { Orientation } from '../presenter/presenterInterfaces';
import clearHTMLElement from './viewModules/clearHTMLElement';

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

  public createBar: (presenter: SliderPresenter) => void;

  public createRunner: (this:SliderView, i: number, runnersInstantPosition:number[]) => void;

  public createTipNumber: (runnerCounter: number, isVertical: boolean) => void;

  public createScale: (this: SliderView) => void;

  public clearHTMLElement: (this: SliderView) => void;

  public updateBarPosition: (activeRunner: RunnerModel) => void;

  public updateTipNumber: (obj: UpdateTipNumberArgs) => void;

  public updateRunnerPosition: (this: SliderView, stepPosition: number, instance: number) => void;

  public updateZIndex: (this: SliderView, i: number) => void;

  public initializeValues: (
    runnerSize: number[], fieldThickness:number, orientation: Orientation
  ) => void;

  public handleDrag: (this: SliderView, runnerInstance: number) => void;

  public handleDrop: (this: SliderView) => void;

  public handleClick: (this: SliderView, runners: RunnerModel[], field: FieldModel) => void;

  public handleInputs: (this: SliderView) => void;

  public notifySliderMoving: (cursorXY: number[], instance: number) => void;

  public notifyFieldClick: (cursorXY: number[]) => void;

  public notifyInputChange: (this: SliderView, runnersValue: number[]) => void;

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
    this.handleInputs = handleInputs.bind(this) as () => void;
    this.notifySliderMoving = notifySliderMoving.bind(this) as () => void;
    this.notifyFieldClick = notifyFieldClick.bind(this) as () => void;
    this.notifyInputChange = notifyInputChange.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
    this.setStep = setStep as () => void;
  }
}
