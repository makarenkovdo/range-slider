import SliderView from '../SliderView';
import initialize from './initialize';
import updateRunnerInput from './updateRunnerInput';

class Input {
  public $element: HTMLInputElement | null;

  public parent: SliderView;

  public initialize:(this:Input) => void;

  public updateRunnerInput:(this:Input, stepValue:number, instance: number) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.$element = null;
    this.initialize = initialize.bind(this) as ()=>void;
    this.updateRunnerInput = updateRunnerInput.bind(this) as ()=>void;
  }
}

export default Input;
