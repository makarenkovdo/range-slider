/* eslint-disable padded-blocks */
/* eslint-env jquery */
import '../index.scss';
// import { addRunnerToDom, prepareRunnerArgs } from './viewModules/createSliderView';
import activateOnDragListener from './viewModules/activateOnDragListener';
import activateOnClickListener from './viewModules/activateOnClickListener';
import activateOnDropListener from './viewModules/activateOnDropListener';
import createBar from './viewModules/createBar';
import createRunner from './viewModules/createRunner';
import createTipNumber from './viewModules/createTipNumber';
import initializeValues from './viewModules/initializeValues';
import initStartEnd from './viewModules/initStartEnd';
import notifyFieldClick from './viewModules/notifyFieldClick';
import notifySliderMoving from './viewModules/notifySliderMoving';
import updateTipNumber from './viewModules/updateTipNumber';
import updateBarPosition from './viewModules/updateBarPosition';
import updateRunnerPosition from './viewModules/updateRunnerPosition';

import FieldModel from '../model/FieldModel';
import SliderPresenter from '../presenter/SliderPresenter';
import RunnerModel from '../model/RunnerModel';

import { UpdateTipNumberArgs } from './viewInterfaces';
import updateZIndex from './viewModules/updateZIndex';
import createScale from './viewModules/createScale';

export default class SliderView {
  public $runners: JQuery<HTMLElement>[];

  public $bar: JQuery<HTMLElement>;

  public isVertical: boolean;

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

  private stepSignAfterComma: number;

  private borderWidth: number;

  private class: string;

  public createBar: (that: SliderPresenter) => void;

  public createRunner: (i: number, isVertical: boolean) => void;

  public createTipNumber: (runnerCounter: number, isVertical: boolean) => void;

  public createScale: (this: SliderView) => void;

  public updateBarPosition: (activeRunner: RunnerModel) => void;

  public updateTipNumber: (obj: UpdateTipNumberArgs) => void;

  public updateRunnerPosition: (this: SliderView, stepPosition: number, instance: number) => void;

  public updateZIndex: (this: SliderView, i: number) => void;

  public initializeValues: (runnerSize: number[]) => void;

  public activateOnDragListener: (this: SliderView, runnerInstance: number) => void;

  public activateOnDropListener: (this: SliderView) => void;

  public activateOnClickListener: (
    this: SliderView,
    runners: RunnerModel[],
    field: FieldModel,
  ) => void;

  public notifySliderMoving: (cursorXY: number[], instance: number) => void;

  public notifyFieldClick: (cursorXY: number[]) => void;

  public initStartEnd: (minValue: number, maxValue: number) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.$field = $(`#${id}`);
    this.$runners = [];
    // this.$bar = '';
    this.class = $(`#${id}`).attr('class');
    this.isVertical = this.$field.hasClass('js-vertical');
    this.isRange = false;
    this.hasBar = false;
    this.hasScale = false;
    this.runnersPosition = [0, 100];
    this.fieldSize = [];
    this.runnerSize = [];
    this.borderWidth = 1;
    this.minMax = [];
    this.stepSignAfterComma = 0;
    this.corrector = 0;
    this.cursorXY = [0, 0];
    this.activeInstance = 0;
    this.isZIndexUpdated = false;
    this.subscriber = subscriber;

    this.createBar = createBar.bind(this) as () => void;
    this.createRunner = createRunner.bind(this) as () => void;
    this.createTipNumber = createTipNumber.bind(this) as () => void;
    this.createScale = createScale.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
    this.updateTipNumber = updateTipNumber.bind(this) as () => void;
    this.updateRunnerPosition = updateRunnerPosition.bind(this) as () => void;
    this.updateZIndex = updateZIndex.bind(this) as () => void;
    this.initializeValues = initializeValues.bind(this) as () => void;
    this.activateOnDragListener = activateOnDragListener.bind(this) as () => void;
    this.activateOnDropListener = activateOnDropListener.bind(this) as () => void;
    this.activateOnClickListener = activateOnClickListener.bind(this) as () => void;
    this.notifySliderMoving = notifySliderMoving.bind(this) as () => void;
    this.notifyFieldClick = notifyFieldClick.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
  }
}
