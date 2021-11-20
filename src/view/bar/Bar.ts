import SliderView from '../SliderView';
import createBar from './createBar';
import updateBarPosition from './updateBarPosition';

export default class Bar {
  parent: SliderView;

  public $bar: JQuery<HTMLElement> | undefined;

  public fieldThickness: number;

  public createBar: (this: Bar, fieldThickness: number) => void;

  public updateBarPosition: (this: Bar) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.fieldThickness = 6;
    this.createBar = createBar.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
  }
}
