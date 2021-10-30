/* eslint-env jquery */
import { DataForRunnerUpdatingArgsType } from '../presenter/presenterInterfaces';
import SliderPresenter from '../presenter/SliderPresenter';
import prepareDataForRunnerUpdating from './fieldModules/prepareDataForRunnerUpdating';
import setMinMax from './fieldModules/setMinMax';

export default class FieldModel {
  class: string;

  minMax: number[];

  isVertical: boolean;

  isRange: boolean;

  subscriber: SliderPresenter;

  // isBarAdded: boolean;

  // range: [];

  // notify: () => void;

  setMinMax: (this: FieldModel, minValue: number, maxValue: number) => void;

  prepareDataForRunnerUpdating: (DataForRunnerUpdating: DataForRunnerUpdatingArgsType) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.class = $(`#${id}`).attr('class');
    this.minMax = [0, 100];
    this.isVertical = $(`#${id}`).hasClass('js-vertical');
    this.isRange = false;
    this.subscriber = subscriber;

    this.setMinMax = setMinMax.bind(this) as () => void;
    this.prepareDataForRunnerUpdating = prepareDataForRunnerUpdating.bind(this) as () => void;
  }
}
