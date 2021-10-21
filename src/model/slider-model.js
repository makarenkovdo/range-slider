/* eslint-env jquery */
class SliderModel {
  constructor(id, instance, subscriber) {
    this.id = id;
    this.$parent = '';
    this.instance = instance;
    this.$element = '';
    this.class = '';
    this.positionInPercentage = 0;
    this.value = 0;
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.stepPosition = 0;
    this.stepValue = 0;
    this.subscriber = subscriber;
  }

  init(min, max) {
    this.$parent = $(`#${this.id}`);
    this.$element = $(`#${this.id}`).children('.slider ');
    this.class = $(`#${this.id}`).attr('class');
    if (this.instance === 0) {
      this.stepPosition = min;
      this.stepValue = min;
    } else {
      this.stepPosition = max;
      this.stepValue = max;
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

  notify() {
    this.subscriber.recieve(this);
  }

  setStep(step) {
    this.step = step;
    if (this.step < 1) {
      this.defineSignAfterComma();
    }
  }

  onDrag(field, slider, hasRange) {
    const onMove = (event) => {
      event.preventDefault();
      this.measurePosition(event, field, slider, hasRange);
    };
    this.$parent.on('mousedown touchstart', `.instance-${this.instance}`, (event) => {
      console.log(event);
      event.preventDefault();
      event.stopPropagation();
      field.$element.addClass('tap');
      field.$element.on('mousemove touchmove', onMove(event));
    });
  }

  measurePosition(event, field, slider, hasRange) {
    const cursorX = event.offsetX;
    const cursorY = event.offsetY;
    if (field.isVertical) {
      const fieldHeight = field.$element[0].offsetHeight;
      this.positionInPercentage = ((fieldHeight - (cursorY + 1)) * 100) / fieldHeight;
    } else {
      this.positionInPercentage = ((cursorX + 5) * 100) / this.$parent[0].offsetWidth;
    }
    const fieldLength = field.maxValue - field.minValue;
    this.value = this.positionInPercentage * (fieldLength / 100) + +field.minValue;
    const stepPosition = (Math.trunc(this.positionInPercentage / this.step) * this.step).toFixed(
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
    console.log(this.positionInPercentage);
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
    if (isCollisionFirst) {
      this.stepPosition = +slider[1].stepPosition - this.step;
      this.stepValue = +slider[1].stepValue - this.step;
    } else if (isCollisionSecond) {
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
      this.$parent.removeClass('tap');
      this.$parent.off('mousemove touchmove');
    }
    this.$parent.on('mouseup touchend', cancelDragging.bind(this));
    $('body').on('mouseup touchend', cancelDragging.bind(this));
  }
}
export default SliderModel;
