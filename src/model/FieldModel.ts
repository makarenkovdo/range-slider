/* eslint-env jquery */
import { DataForRunnerUpdatingArgsType } from '../presenter/presenterInterfaces';
import SliderPresenter from '../presenter/SliderPresenter';
import prepareDataForRunnerUpdating from './fieldModules/prepareDataForRunnerUpdating';
import setMinMax from './fieldModules/setMinMax';

export default class FieldModel {
  public minMax: number[];

  public isVertical: boolean;

  public isRange: boolean;

  private class: string;

  private subscriber: SliderPresenter;

  public setMinMax: (this: FieldModel, minValue: number, maxValue: number) => void;

  public prepareDataForRunnerUpdating: (
    DataForRunnerUpdating: DataForRunnerUpdatingArgsType,
  ) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.class = $(`#${id}`).attr('class');
    this.minMax = [0, 100];
    this.isVertical = $(`#${id}`).hasClass('js-slider_vertical');
    this.isRange = false;
    this.subscriber = subscriber;

    this.setMinMax = setMinMax.bind(this) as () => void;
    this.prepareDataForRunnerUpdating = prepareDataForRunnerUpdating.bind(this) as () => void;
  }
}
