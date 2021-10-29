/* eslint-env jquery */
import { DataForRunnerUpdatingArgsType } from '../presenter/presenterInterfaces';
import SliderPresenter from '../presenter/SliderPresenter';
import { InitDataAndSizeArgs } from './fieldModules/fieldModulesInterfaces';
import notify from './fieldModules/notify';
import prepareDataForRunnerUpdating from './fieldModules/prepareDataForRunnerUpdating';
// import initValues from './fieldModules/setDataStartEnd';
import setMinMax from './fieldModules/setMinMax';
import RunnerModel from './RunnerModel';

export default class FieldModel {
  // $element: JQuery<HTMLElement>;

  class: string;

  // size: Array<string>;

  // id: string;

  minValue: number;

  maxValue: number;

  // step: number;

  // stepSignAfterComma: number;

  isVertical: boolean;

  isRange: boolean;

  subscriber: SliderPresenter;

  // isBarAdded: boolean;

  // range: [];

  notify: () => void;

  setMinMax: (minMax: Array<string | number>) => void;

  prepareDataForRunnerUpdating: (DataForRunnerUpdating: DataForRunnerUpdatingArgsType) => void;

  // initValues: (args: InitDataAndSizeArgs) => void;

  constructor(id: string, subscriber: SliderPresenter) {
    this.class = $(`#${id}`).attr('class');
    this.minValue = 0;
    this.maxValue = 100;
    // this.step = 1;
    // this.stepSignAfterComma = 0;
    this.isVertical = this.class === 'range-slider vertical';
    this.isRange = false;
    this.subscriber = subscriber;
    // this.isBarAdded = false;

    this.notify = notify.bind(this) as () => void;
    this.setMinMax = setMinMax.bind(this) as () => void;
    this.prepareDataForRunnerUpdating = prepareDataForRunnerUpdating.bind(this) as () => void;
    // this.initValues = initValues as (a: InitDataAndSizeArgs) => void;
  }
}
