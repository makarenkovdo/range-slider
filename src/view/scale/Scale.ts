import SliderView from '../SliderView';
import create from './create';

export default class Scale {
  public parent: SliderView;

  public create: (this: Scale) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.create = create.bind(this) as () => void;
  }
}
