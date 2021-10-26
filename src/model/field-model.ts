import SliderController from '../controller/slider-controller';
import InitDataStartEndArgs from './field-modules/fieldModulesInterfaces';
import notify from './field-modules/notify';
import onClick from './field-modules/onClick';
import initDataStartEnd from './field-modules/setDataStartEnd';
import setMinMax from './field-modules/setMinMax';
import SliderModel from './slider-model';

/* eslint-env jquery */

export default class FieldModel {
  $element: JQuery<HTMLElement>;

  class: string;

  size: Array<string>;

  id: string;

  minValue: number;

  maxValue: number;

  step: number;

  stepSignAfterComma: number;

  isVertical: boolean;

  isRange: boolean;

  subscriber: SliderController;

  isBarAdded: boolean;

  range: [];

  notify: () => void;

  setMinMax: (minMax: Array<string | number>) => void;

  onClick: (slider: SliderModel[], isRange: boolean) => void;

  initDataStartEnd: (a: InitDataStartEndArgs) => void;

  constructor(id: string, subscriber: SliderController) {
    this.$element = $(`#${id}`);
    this.class = this.$element.attr('class');
    this.size = [$(`#${id}`).css('width'), $(`#${id}`).css('height')];
    this.id = id;
    this.minValue = 0;
    this.maxValue = 100;
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.isVertical = this.class === 'range-slider vertical';
    this.isRange = false;
    this.subscriber = subscriber;
    this.isBarAdded = false;
    this.range = []; // ?????????????????????????

    this.notify = notify.bind(this) as () => void;
    this.setMinMax = setMinMax.bind(this) as () => void;
    this.onClick = onClick.bind(this) as () => void;
    this.initDataStartEnd = initDataStartEnd as (a: InitDataStartEndArgs) => void;
  }
}
