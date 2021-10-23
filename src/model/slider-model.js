/* eslint-env jquery */
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

  initializeMinMax(min, max) {
    if (this.instance === 0) {
      this.stepPosition = min;
      this.stepValue = min;
    } else {
      this.stepPosition = max;
      this.stepValue = max;
    }
  }

  notify() {
    this.subscriber.recieve(this);
  }

  setStep(step) {
    this.step = step;
    if (this.step < 1) {
      this.defineSignAfterComma();
    }
  }

  //    for small 'steps' we need to define sign quantity after comma
  defineSignAfterComma() {
    if (this.step.toString().includes('.')) {
      this.stepSignAfterComma = this.step
        .toString()
        .split('.')
        .pop().length;
    } else this.stepSignAfterComma = 0;
  }

  onDrag(slider, hasRange, field) {
    const onMove = (event) => {
      event.preventDefault();
      this.measurePosition(event, field, slider, hasRange);
    };

    $(`#${this.id}`).on('mousedown touchstart', `.instance-${this.instance}`, (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.$field.addClass('tap');
      this.$field.on('mousemove touchmove', onMove);
    });
  }

  measurePosition(event, { isVertical, minValue, maxValue }, slider, hasRange) {
    const cursorX = event.offsetX;
    const cursorY = event.offsetY;
    if (isVertical) {
      const fieldHeight = this.$field[0].offsetHeight;
      this.positionInPercentage = ((fieldHeight - (cursorY + 1)) * 100) / fieldHeight;
    } else {
      this.positionInPercentage = ((cursorX + 5) * 100) / this.$field[0].offsetWidth;
    }
    const fieldLength = maxValue - minValue;
    this.value = this.positionInPercentage * (fieldLength / 100) + +minValue;
    const stepPosition = (Math.round(this.positionInPercentage / this.step) * this.step).toFixed(
      this.stepSignAfterComma,
    );
    const stepValue = (Math.round(this.value / this.step) * this.step).toFixed(
      this.stepSignAfterComma,
    );
    // console.log(stepPosition);

    // const returned = this.checkBordersCollision(stepPosition, slider);

    if (hasRange) {
      this.checkCollision(stepPosition, stepValue, slider);
    } else [this.stepPosition, this.stepValue] = [stepPosition, stepValue];
    this.notify.call(this);

    // if (slider[1].stepPosition < slider[0].stepPosition) {
    //     console.log('???')
    //     slider[1].stepPosition = slider[0].stepPosition
    //     slider[1].stepValue = slider[0].stepValue
    // }
  }

  // prettier-ignore
  checkCollision(stepPosition, stepValue, slider) {
    const isCollisionFirst = () => (!this.isVertical && this.instance === 0
        && stepPosition - slider[1].stepPosition >= this.step)
        || (this.isVertical && this.instance === 0
          && stepPosition - slider[1].stepPosition <= this.step);

    // prettier-ignore
    const isCollisionSecond = () => (
      (!this.isVertical && this.instance === 1
          && stepPosition - slider[0].stepPosition <= this.step)
          || (this.isVertical && this.instance === 0
            && stepPosition - slider[0].stepPosition >= this.step)
    );
    // todo: slider[0] = this.slider
    // if (isCollisionFirst) {
    //   slider[0].stepPosition = +slider[1].stepPosition - this.step;
    //   slider[0].stepValue = +slider[1].stepValue - this.step;
    // } else if (isCollisionSecond) {
    //   slider[1].stepPosition = +slider[0].stepPosition + this.step;
    //   slider[1].stepValue = +slider[0].stepValue + this.step;
    // } else {
    //   this.stepPosition = stepPosition;
    //   this.stepValue = stepValue;
    // }

    if (isCollisionFirst()) {
      this.stepPosition = +slider[1].stepPosition - this.step;
      this.stepValue = +slider[1].stepValue - this.step;
    } else if (isCollisionSecond()) {
      this.stepPosition = +slider[0].stepPosition + this.step;
      this.stepValue = +slider[0].stepValue + this.step;
    } else {
      this.stepPosition = stepPosition;
      this.stepValue = stepValue;
    }
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
