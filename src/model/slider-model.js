/* eslint-env jquery */

import defineSignAfterComma from './slider-modules/defineSignAfterComma';
import initializeDefaultValues from './slider-modules/initializeDefaultValues';
import notify from './slider-modules/notify';
import onDrag from './slider-modules/onDrag';
import { updatePosition } from './slider-modules/onDrag/onDragUtility';
import onDrop from './slider-modules/onDrop';
import setStep from './slider-modules/setStep';

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

    this.defineSignAfterComma = defineSignAfterComma.bind(this);
    this.onDrag = onDrag.bind(this);
    this.onDrop = onDrop;
    this.notify = notify.bind(this);
    this.setStep = setStep.bind(this);
    this.updatePosition = updatePosition.bind(this);
    this.initializeDefaultValues = initializeDefaultValues.bind(this);
  }
}
export default SliderModel;
