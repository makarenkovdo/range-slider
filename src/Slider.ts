import SliderPresenter from './presenter/SliderPresenter';
import './index.scss';
import checkValues from './presenter/presenterModules/checkValues';
import { BuildParams, BuildParamsBeforeChecking } from './initializeTypes';

class Slider {
  public presenter: SliderPresenter;

  public checkValues: (params: BuildParamsBeforeChecking) => BuildParams;

  constructor(
    id: string,
    params: BuildParams,
  ) {
    this.presenter = new SliderPresenter(this, id, params);
    this.checkValues = checkValues;
  }

  public getValues():BuildParams {
    return this.presenter.params;
  }
}

export default Slider;
