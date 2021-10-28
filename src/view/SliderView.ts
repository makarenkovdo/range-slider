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
import FieldModel from '../model/FieldModel';
import { activateOnDragListener } from './viewModules/activateOnDragListener';
import activateOnDropListener from './viewModules/activateOnDropListener';
import notify from './viewModules/notify';
export default class SliderView {
  $field: JQuery<HTMLElement>;

  $runner: JQuery<HTMLElement>[];

  $bar: JQuery<HTMLElement>;

  isVertical: boolean;

  runnersPosition: number[];

  runnerSize: number[];

  fieldSize: number[];

  stepSignAfterComma: number;

  clickXY: number[];

  corrector: number;

  subscriber: SliderPresenter;

  createBar: (that: SliderPresenter) => void;

  createRunner: (i: number, isVertical: boolean) => void;

  createTipNumber: (runnerCounter: number, isVertical: boolean) => void;

  updateBarPosition: (isRange: boolean, activeRunner: RunnerModel) => void;

  updateTipNumber: (obj: UpdateTipNumberArgs) => void;

  updateRunnerPosition: (activeRunner: RunnerModel) => void;

  initializeValues: (runnerSize: number[], size: string[], isVertical: boolean) => void;

  activateOnDragListener: (
    this: SliderView,
    runner: RunnerModel[],
    isRange: boolean,
    field: FieldModel,
    runnerInstance: number,
  ) => void;

  activateOnDropListener: ($element: JQuery<HTMLElement>) => void;

  notify: (this: SliderView) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.$field = $(`#${id}`);
    this.$runner = [];
    // this.$bar = '';
    this.isVertical = false;
    this.runnersPosition = [0, 100];
    this.runnerSize = [];
    this.stepSignAfterComma = 0;
    this.corrector = 0;
    this.clickXY = [0, 0];
    this.subscriber = subscriber;

    this.createBar = createBar.bind(this) as () => void;
    this.createRunner = createRunner.bind(this) as () => void;
    this.createTipNumber = createTipNumber.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
    this.updateTipNumber = updateTipNumber.bind(this) as () => void;
    this.updateRunnerPosition = updateRunnerPosition.bind(this) as () => void;
    this.initializeValues = initializeValues.bind(this) as () => void;
    this.activateOnDragListener = activateOnDragListener.bind(this) as () => void;
    this.activateOnDropListener = activateOnDropListener as () => void;
    this.notify = notify.bind(this) as () => void;
  }
}
