/* eslint-env jquery */

import calcSignAfterComma from './slider-modules/defineSignAfterComma';
import { activateOnDragListener, updatePosition } from './slider-modules/onDrag';
import activateOnDropListener from './slider-modules/onDrop';

class SliderModel {
  constructor(id, instance, subscriber, sliderSize, $field) {
    this.id = id;
    this.class = $(`#${this.id}`).attr('class');
    this.$field = $field;
    this.instance = instance;
    this.$slider = '';
    this.size = sliderSize;
    this.positionInPercent = 0;
    this.value = 0;
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.stepPosition = 0;
    this.stepValue = 0;
    this.subscriber = subscriber;
    this.updatePosition = updatePosition.bind(this);
  }

  //    for small 'steps' we need to define sign quantity after comma
  defineSignAfterComma() {
    this.setThisSignAfterComma(calcSignAfterComma(this.step));
  }

  initializeDefaultPositionAndValue(minMax) {
    const minMaxStepPosition = [0, 100];
    this.stepPosition = minMaxStepPosition[this.instance];
    this.stepValue = minMax[this.instance];
  }

  notify() {
    this.subscriber.recieve(this);
  }

  onDrag(slider, isRange, field) {
    activateOnDragListener(this, field, slider, isRange);
  }

  // checkBordersCollision(stepPosition, slider) {
  //   if (this.positionInPercent < 1) {
  //   }
  //   //     this.notify.call(this)
  // }

  onDrop() {
    activateOnDropListener(this.$field);
  }

  setStep(step) {
    this.step = step;
  }

  setThisSignAfterComma(stepSignAfterComma) {
    this.stepSignAfterComma = stepSignAfterComma;
  }
}
export default SliderModel;
