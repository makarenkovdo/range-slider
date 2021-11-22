import SliderView from '../SliderView';
import { UpdateTipNumberArgs } from '../viewInterfaces';
import create from './create';
import update from './update';

export default class Tip {
  public parent: SliderView;

  public create: (
    this:Tip,
    runnerCounter: number,
    isVertical: boolean,
    stepPosition:number,
    stepValue:number,
  ) => void;

  public update: (this:Tip, args: UpdateTipNumberArgs) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.create = create.bind(this) as () => void;
    this.update = update.bind(this) as () => void;
  }
}
