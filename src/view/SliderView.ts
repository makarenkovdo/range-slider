/* eslint-disable padded-blocks */
/* eslint-env jquery */
import '../index.scss';
// import { addRunnerToDom, prepareRunnerArgs } from './view-modules/createSliderView';
import createBar from './view-modules/createBar';
import createRunner from './view-modules/createRunner';
import createTipNumber from './view-modules/createTipNumber';
import updateTipNumber from './view-modules/updateTipNumber';
import updateBarPosition from './view-modules/updateBarPosition';
import updateRunnerPosition from './view-modules/updateRunnerPosition';
import initializeValues from './view-modules/initializeValues';
import RunnerController from '../presenter/SliderPresenter';
import RunnerModel from '../model/RunnerModel';
import { UpdateTipNumberArgs } from './viewInterfaces';
import FieldModel from '../model/FieldModel';
import onDrag from './view-modules/onDrag';
import onDrop from './view-modules/onDrop';

export default class SliderView {
  $field: JQuery<HTMLElement>;

  $runner: JQuery<HTMLElement>;

  $bar: JQuery<HTMLElement>;

  isVertical: boolean;

  runnersPosition: number[];

  runnerSize: number[];

  fieldSize: number[];

  stepSignAfterComma: number;

  corrector: number;

  createBar: (that: RunnerController) => void;

  createRunner: (i: number, isVertical: boolean) => void;

  createTipNumber: (runnerCounter: number, isVertical: boolean) => void;

  updateBarPosition: (isRange: boolean, activeRunner: RunnerModel) => void;

  updateTipNumber: (obj: UpdateTipNumberArgs) => void;

  updateRunnerPosition: (activeRunner: RunnerModel) => void;

  initializeValues: (runnerSize: number[], size: string[], isVertical: boolean) => void;

  onDrag: (runner: RunnerModel[], isRange: boolean, field: FieldModel) => void;

  onDrop: ($element: JQuery<HTMLElement>) => void;

  constructor(id: string) {
    this.$field = $(`#${id}`);
    // this.$runner = '';
    // this.$bar = '';
    this.isVertical = false;
    this.runnersPosition = [0, 100];
    this.runnerSize = [];
    this.stepSignAfterComma = 0;
    this.corrector = 0;

    this.createBar = createBar.bind(this) as () => void;
    this.createRunner = createRunner.bind(this) as () => void;
    this.createTipNumber = createTipNumber.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
    this.updateTipNumber = updateTipNumber.bind(this) as () => void;
    this.updateRunnerPosition = updateRunnerPosition.bind(this) as () => void;
    this.initializeValues = initializeValues.bind(this) as () => void;
    this.onDrag = onDrag.bind(this) as () => void;
    this.onDrop = onDrop;
}
