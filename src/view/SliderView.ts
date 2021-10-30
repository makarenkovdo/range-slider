/* eslint-disable padded-blocks */
/* eslint-env jquery */
import '../index.scss';
// import { addRunnerToDom, prepareRunnerArgs } from './viewModules/createSliderView';
import createBar from './viewModules/createBar';
import createRunner from './viewModules/createRunner';
import createTipNumber from './viewModules/createTipNumber';
import updateTipNumber from './viewModules/updateTipNumber';
import updateBarPosition from './viewModules/updateBarPosition';
import updateRunnerPosition from './viewModules/updateRunnerPosition';
import initializeValues from './viewModules/initializeValues';
import SliderPresenter from '../presenter/SliderPresenter';
import RunnerModel from '../model/RunnerModel';
import { UpdateTipNumberArgs } from './viewInterfaces';
import activateOnDragListener from './viewModules/activateOnDragListener';
import activateOnClickListener from './viewModules/activateOnClickListener';
import activateOnDropListener from './viewModules/activateOnDropListener';
import FieldModel from '../model/FieldModel';
import initStartEnd from './viewModules/initStartEnd';
import notifyFieldClick from './viewModules/notifyFieldClick';
import notifySliderMoving from './viewModules/notifySliderMoving';

export default class SliderView {
  class: string;

  $field: JQuery<HTMLElement>;

  $runners: JQuery<HTMLElement>[];

  $bar: JQuery<HTMLElement>;

  isVertical: boolean;

  isRange: boolean;

  hasBar: boolean;

  runnersPosition: number[];

  runnerSize: number[];

  borderWidth: number;

  fieldSize: number[];

  minMax: number[];

  stepSignAfterComma: number;

  cursorXY: number[];

  corrector: number;

  subscriber: SliderPresenter;

  createBar: (that: SliderPresenter) => void;

  createRunner: (i: number, isVertical: boolean) => void;

  createTipNumber: (runnerCounter: number, isVertical: boolean) => void;

  updateBarPosition: (activeRunner: RunnerModel) => void;

  updateTipNumber: (obj: UpdateTipNumberArgs) => void;

  updateRunnerPosition: (this: SliderView, stepPosition: number, instance: number) => void;

  initializeValues: (runnerSize: number[], size: number[], isVertical: boolean) => void;

  activateOnDragListener: (this: SliderView, runnerInstance: number) => void;

  activateOnDropListener: (this: SliderView) => void;

  activateOnClickListener: (this: SliderView, runners: RunnerModel[], field: FieldModel) => void;

  notifySliderMoving: (cursorXY: number[], instance: number) => void;

  notifyFieldClick: (cursorXY: number[]) => void;

  initStartEnd: (minValue: number, maxValue: number) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.$field = $(`#${id}`);
    this.$runners = [];
    // this.$bar = '';
    this.class = $(`#${id}`).attr('class');
    this.isVertical = this.$field.hasClass('js-vertical');
    this.isRange = false;
    this.hasBar = false;
    this.runnersPosition = [0, 100];
    this.fieldSize = [];
    this.runnerSize = [];
    this.borderWidth = 1;
    this.minMax = [];
    this.stepSignAfterComma = 0;
    this.corrector = 0;
    this.cursorXY = [0, 0];
    this.subscriber = subscriber;

    this.createBar = createBar.bind(this) as () => void;
    this.createRunner = createRunner.bind(this) as () => void;
    this.createTipNumber = createTipNumber.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
    this.updateTipNumber = updateTipNumber.bind(this) as () => void;
    this.updateRunnerPosition = updateRunnerPosition.bind(this) as () => void;
    this.initializeValues = initializeValues.bind(this) as () => void;
    this.activateOnDragListener = activateOnDragListener.bind(this) as () => void;
    this.activateOnDropListener = activateOnDropListener.bind(this) as () => void;
    this.activateOnClickListener = activateOnClickListener.bind(this) as () => void;
    this.notifySliderMoving = notifySliderMoving.bind(this) as () => void;
    this.notifyFieldClick = notifyFieldClick.bind(this) as () => void;
    this.initStartEnd = initStartEnd as () => void;
  }
}
