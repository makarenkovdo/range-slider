import { CreateBarArgs } from '../presenterInterfaces';
import SliderPresenter from '../SliderPresenter';

const createBar = function createSliderBar(
  this: SliderPresenter,
  { shouldAddBar }: CreateBarArgs,
): SliderPresenter {
  if (shouldAddBar) {
    this.view.hasBar = true;
    this.view.createBar(this);
    this.view.updateBarPosition(this.runners[0]);
  }

  return this;
};

export default createBar;
