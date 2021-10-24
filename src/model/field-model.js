import notify from './field-modules/notify';
import onClick from './field-modules/onClick';
import setMinMax from './field-modules/setMinMax';

/* eslint-env jquery */

export default class FieldModel {
  constructor(id, subscriber) {
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
    // this.stepPosition = 0
    // this.stepValue = 0
    this.range = [];
    this.notify = notify.bind(this);
    this.setMinMax = setMinMax.bind(this);
    this.onClick = onClick.bind(this);
  }

  initDataStartEnd() {
    this.$element.attr('data-start', this.minValue);
    this.$element.attr('data-end', this.maxValue);

    return this;
  }
}
