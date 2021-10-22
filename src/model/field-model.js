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
  }

  initDataStartEnd() {
    this.$element.attr('data-start', this.minValue);
    this.$element.attr('data-end', this.maxValue);
    return this;
  }

  // defineSignAfterComma() {
  //   (step) => {
  //     step.toString().includes('.')
  //       ? (this.stepSignAfterComma = step
  //           .toString()
  //           .split('.')
  //           .pop().length)
  //       : (this.stepSignAfterComma = 0);
  //   };
  //   f(this.step);
  // }

  notify() {
    this.subscriber.recieve(this);
  }

  setMinMax(args) {
    const [minOrMax, dataSuffix, value] = args;
    if (!value.isNaN && value !== undefined) {
      this[minOrMax] = value;
    }
    console.log(minOrMax, dataSuffix, value);
    return this;
  }

  onClick(isRange, sliders) {
    const onClickHandler = (event) => {
      let nearest = 0;
      if (isRange) nearest = this.defineNearestSlider(event);
      sliders[nearest].measurePosition(event, this, sliders, isRange);
    };
    $(`#${this.id}`).on('click', onClickHandler);
  }

  defineNearestSlider(event) {
    const cursorXY = [event.offsetX, event.offsetY];
    let positioning = 'left';
    let xySwitcher = 0;
    if (this.isVertical) {
      positioning = 'top';
      xySwitcher = 1;
    }

    // prettier-ignore
    const slidersPosition = [0, 1].map((v) => parseInt($(`#${this.id}`).children(`.slider.instance-${v}`).css(positioning), 10));

    const lengthToFirstSlider = Math.abs(cursorXY[xySwitcher] - slidersPosition[0]);
    const lengthToSecondSlider = Math.abs(cursorXY[xySwitcher] - slidersPosition[1]);
    const nearest = lengthToFirstSlider - lengthToSecondSlider < 0 ? 0 : 1;

    return nearest;
  }
}
