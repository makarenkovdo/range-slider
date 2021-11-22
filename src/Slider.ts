import SliderPresenter from './presenter/SliderPresenter';
import './index.scss';
import checkValues from './presenter/presenterModules/checkValues';
import { BuildParams, BuildParamsBeforeChecking } from './initializeTypes';

class Slider {
  public presenter: SliderPresenter;

  public checkValues: (params: BuildParamsBeforeChecking) => BuildParams;

  constructor(
    id: string,
    params: BuildParamsBeforeChecking,
  ) {
    this.checkValues = checkValues;
    this.presenter = new SliderPresenter(this, id, checkValues(params));
  }

  public getValues():BuildParams {
    return this.presenter.params;
  }

  public rebuild(params:BuildParams) {
    this.presenter.rebuild(checkValues(params));
  }
}

export { Slider };
