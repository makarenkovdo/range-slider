/* eslint-env jquery */

export default class FieldModel {
  constructor(id, subscriber) {
    this.$element = $(`#${id}`);
    this.class = this.$element.attr('class');
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

  init() {
    this.$element.attr('data-end', this.minValue);
    this.$element.attr('data-start', this.maxValue);
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

  setMaxValue(value) {
    this.setMinMax(['maxValue', 'end', value]);
    return this;
  }

  setMinValue(value) {
    this.setMinMax(['minValue', 'start', value]);
    return this;
  }

  setMinMax(args) {
    const [minOrMax, dataSuffix, value] = args;
    if (!Number.isNaN && value !== undefined) {
      this[minOrMax] = value;
    }
    this.$element.attr(`data-${dataSuffix}`, this[minOrMax]);
  }

  onClick(isRange, sliders) {
    const onClickHandler = (event) => {
      let nearest = 0;
      if (isRange) nearest = this.defineNearestSlider(event);
      sliders[nearest].measurePosition(event, this, sliders, isRange);
    };

    $(`#${this.id}`).on('click', onClickHandler(isRange));
  }

  defineNearestSlider(event) {
    const cursorXY = [event.offsetX, event.offsetY];
    let positioning = 'left';
    let xySwitcher = 0;
    if (this.isVertical) {
      positioning = 'top';
      xySwitcher = 1;
    }
    const slidersPosition = [0, 1].map((v) =>
      parseInt(
        $(`#${this.id}`)
          .children(`.slider.instance-${v}`)
          .css(positioning),
        10,
      ),
    );

    const nearest =
      Math.abs(cursorXY[xySwitcher] - slidersPosition[0]) -
        Math.abs(cursorXY[xySwitcher] - slidersPosition[1]) <
      0
        ? 0
        : 1;

    return nearest;
  }
}
