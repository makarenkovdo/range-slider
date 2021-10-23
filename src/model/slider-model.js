/* eslint-env jquery */

import calcSignAfterComma from './slider-modules/defineSignAfterComma';
import activateOnDragListener from './slider-modules/onDrag';

class SliderModel {
  constructor(id, instance, subscriber, sliderSize, $field) {
    this.id = id;
    this.class = $(`#${this.id}`).attr('class');
    this.$field = $field;
    this.instance = instance;
    this.$slider = '';
    this.size = sliderSize;
    this.positionInPercentage = 0;
    this.value = 0;
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.stepPosition = 0;
    this.stepValue = 0;
    this.subscriber = subscriber;
  }

  initializeDefaultPositionAndValue(minMax) {
    this.stepPosition = minMax[this.instance];
    this.stepValue = minMax[this.instance];
  }

  notify() {
    this.subscriber.recieve(this);
  }

  setStep(step) {
    this.step = step;
  }

  //    for small 'steps' we need to define sign quantity after comma
  defineSignAfterComma() {
    this.setThisSignAfterComma(calcSignAfterComma(this.step));
  }

  setThisSignAfterComma(stepSignAfterComma) {
    this.stepSignAfterComma = stepSignAfterComma;
  }

  onDrag(slider, hasRange, field) {
    activateOnDragListener(this, field, slider, hasRange);
  }

  // checkBordersCollision(stepPosition, slider) {
  //   if (this.positionInPercentage < 1) {
  //   }
  //   //     this.notify.call(this)
  // }

  // onDrop() {
  //   $('.range-slider').on('mouseup touchend', (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     $('.range-slider').removeClass('tap');
  //     $('.range-slider').off('mousemove touchmove');
  //   });
  //   $('body').on('mouseup touchend', (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     $('.range-slider').removeClass('tap');
  //     $('.range-slider').off('mousemove touchmove');
  //   });
  // }
  onDrop() {
    function cancelDragging(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$field.removeClass('tap');
      this.$field.off('mousemove touchmove');
    }
    this.$field.on('mouseup touchend', cancelDragging.bind(this));
    $('body').on('mouseup touchend', cancelDragging.bind(this));
  }
}
export default SliderModel;
