/* eslint-env jquery */

import defineSignAfterComma from './slider-modules/defineSignAfterComma';
import calcSignAfterComma from './slider-modules/defineSignAfterComma';
import onDrag from './slider-modules/onDrag';
import { updatePosition } from './slider-modules/onDrag/onDragUtility';
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
    this.onDrag = onDrag.bind(this);
    this.defineSignAfterComma = defineSignAfterComma.bind(this);
  }

  //    for small 'steps' we need to define sign quantity after comma

  initializeDefaultPositionAndValue(minMax) {
    const minMaxStepPosition = [0, 100];
    this.stepPosition = minMaxStepPosition[this.instance];
    this.stepValue = minMax[this.instance];
  }

  notify() {
    this.subscriber.recieve(this);
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
}
export default SliderModel;
