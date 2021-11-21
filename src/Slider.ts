import { PresenterBuildParamsBeforeChecking } from './presenter/presenterInterfaces';
import SliderPresenter from './presenter/SliderPresenter';
import './index.scss';

class Slider {
  public presenter: SliderPresenter;

  constructor(id: string, params: PresenterBuildParamsBeforeChecking) {
    this.presenter = new SliderPresenter(id, params);
  }
}

export default Slider;
