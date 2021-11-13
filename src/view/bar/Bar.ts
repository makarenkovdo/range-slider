import SliderView from '../SliderView';
import SliderPresenter from '../../presenter/SliderPresenter';
import createBar from './createBar';
import updateBarPosition from './updateBarPosition';

export default class Bar {
  parent: SliderView;

  public $bar: JQuery<HTMLElement>;

  public createBar: (presenter: SliderPresenter) => void;

  public updateBarPosition: (this: Bar) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.createBar = createBar.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
  }
}
