/* eslint-env jquery */
import { DataForRunnerUpdatingArgsType, Orientation } from '../presenter/presenterInterfaces';
import SliderPresenter from '../presenter/SliderPresenter';
import prepareDataForRunnerUpdating from './fieldModules/prepareDataForRunnerUpdating';
import setMinMax from './fieldModules/setMinMax';
import setIsVertical from './fieldModules/setOrientation';

export default class FieldModel {
  public minMax: number[];

  public isVertical: boolean;

  public isRange: boolean;

  private class: string;

  private subscriber: SliderPresenter;

  public setIsVertical: (this: FieldModel, orientation: Orientation) => void;

  public setMinMax: (this: FieldModel, minValue: number, maxValue: number) => void;

  public prepareDataForRunnerUpdating: (
    DataForRunnerUpdating: DataForRunnerUpdatingArgsType,
  ) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.class = $(`#${id}`).attr('class');
    this.minMax = [0, 100];
    this.isVertical = false;
    this.isRange = false;
    this.subscriber = subscriber;

    this.setIsVertical = setIsVertical.bind(this) as () => void;
    this.setMinMax = setMinMax.bind(this) as () => void;
    this.prepareDataForRunnerUpdating = prepareDataForRunnerUpdating.bind(this) as () => void;
  }
}
