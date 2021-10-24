/* eslint-env jquery */

import defineSignAfterComma from './slider-modules/defineSignAfterComma';
import notify from './slider-modules/notify';
import onDrag from './slider-modules/onDrag';
import { updatePosition } from './slider-modules/onDrag/onDragUtility';
import onDrop from './slider-modules/onDrop';
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
    this.onDrop = onDrop;
    this.defineSignAfterComma = defineSignAfterComma.bind(this);
    this.notify = notify.bind(this);
  }

  initializeDefaultPositionAndValue(minMax) {
    const minMaxStepPosition = [0, 100];
    this.stepPosition = minMaxStepPosition[this.instance];
    this.stepValue = minMax[this.instance];
  }

  // checkBordersCollision(stepPosition, slider) {
  //   if (this.positionInPercent < 1) {
  //   }
  //   //     this.notify.call(this)
  // }

  setStep(step) {
    this.step = step;
  }
}
export default SliderModel;
