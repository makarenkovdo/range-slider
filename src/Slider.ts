import { PresenterBuildParamsBeforeChecking } from './presenter/presenterInterfaces';
import SliderPresenter from './presenter/SliderPresenter';

class Slider {
  private presenter: SliderPresenter;

  constructor(id: string, params: PresenterBuildParamsBeforeChecking) {
    this.presenter = new SliderPresenter(id, params);
  }
}

export default Slider;
