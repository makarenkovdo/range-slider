import { PresenterBuildParams, PresenterBuildParamsBeforeChecking } from './presenter/presenterInterfaces';
import SliderPresenter from './presenter/SliderPresenter';
import './index.scss';

class Slider {
  public presenter: SliderPresenter;

  constructor(
    id: string,
    params: PresenterBuildParams,
  ) {
    this.presenter = new SliderPresenter(this, id, params);
  }

  public getValues():PresenterBuildParams {
    if (this.view.isRange) {
      return {
        runnersInstantPosition: [this.runners[0].stepValue, this.runners[1].stepValue],
      };
    }
    return { runnersInstantPosition: [1, 0] };
  }
}

export default Slider;
