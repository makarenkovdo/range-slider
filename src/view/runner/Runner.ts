import SliderView from '../SliderView';
import createRunner from './create';
import handleDrag from './handleDrag';
import handleDrop from './handleDrop';
import notifySliderMoving from './notifySliderMoving';
import updatePosition from './updatePosition';
import updateZIndex from './updateZIndex';

export default class Runner {
  public parent: SliderView;

  public $elements: JQuery<HTMLElement>[];

  public activeInstance: number;

  public cursorXY: number[];

  public isZIndexUpdated: boolean;

  public positions: number[];

  public size: number[];

  public step: number;

  public stepSignAfterComma: number;

  public createRunner: (this:Runner,
    i: number,
    stepPosition:number,
  ) => void;

  public handleDrag: (this: Runner, runnerInstance: number) => void;

  public handleDrop: (this: Runner) => void;

  public notifySliderMoving: (this: Runner, cursorXY: number[], instance: number) => void;

  public updatePosition: (this: Runner, stepPosition: number, instance: number) => void;

  public updateZIndex: (this: Runner, i: number) => void;

  constructor(view: SliderView) {
    this.parent = view;

    this.$elements = [];

    this.activeInstance = 0;
    this.positions = [0, 100];
    this.isZIndexUpdated = false;
    this.size = [];
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.cursorXY = [0, 0];

    this.createRunner = createRunner.bind(this) as () => void;
    this.handleDrag = handleDrag.bind(this) as () => void;
    this.handleDrop = handleDrop.bind(this) as () => void;
    this.notifySliderMoving = notifySliderMoving.bind(this) as () => void;
    this.updatePosition = updatePosition.bind(this) as () => void;
    this.updateZIndex = updateZIndex.bind(this) as () => void;
  }
}
