/* eslint-disable padded-blocks */
/* eslint-env jquery */
import '../index.scss';
// import { addSliderToDom, prepareSliderArgs } from './view-modules/createSliderView';
import {
  prepareTipNumberArgs,
  addTipNumberToDom,
} from './view-modules/createTipNumber/createTipNumberUtility';
import {
  defineBarType,
  calcLengthOfRangeBar,
  updateSingleVerticalBarPosition,
  updateSingleHorizontalBarPosition,
  updateRangeBarPosition,
} from './view-modules/updateBarPosition';
import createBar from './view-modules/createBar';
import createSlider from './view-modules/createSlider';
import createTipNumber from './view-modules/createTipNumber';

export default class SliderView {
  constructor(id) {
    this.$field = $(`#${id}`);
    this.$slider = '';
    this.slidersPosition = [0, 100];
    this.$bar = '';
    this.sliderSize = [];
    this.isVertical = false;
    this.stepSignAfterComma = 0;
    this.createBar = createBar.bind(this);
    this.createSlider = createSlider.bind(this);
    this.createTipNumber = createTipNumber.bind(this);
    // this.createSliderViewModules = { addSliderToDom, prepareSliderArgs };
    // this.corrector = 0;
  }

  initializeValues(sliderSize, fieldSize, isVertical) {
    this.sliderSize = sliderSize;
    this.fieldSize = fieldSize;
    this.isVertical = isVertical;
    if (this.isVertical) {
      this.corrector = (sliderSize[1] / fieldSize[1]) * 50;
    } else {
      this.corrector = (sliderSize[0] / fieldSize[0]) * 50;
    }
  }

  updateBar(isRange, activeSlider) {
    defineBarType({
      isRange,
      activeSlider,
      isVertical: this.isVertical,
      $bar: this.$bar,
      $field: this.$field,
      slidersPosition: this.slidersPosition,
      calcLengthOfRangeBar,
      updateSingleVerticalBarPosition,
      updateSingleHorizontalBarPosition,
      updateRangeBarPosition,
    });
  }

  updatePosition(updatingSlider) {
    if (updatingSlider.stepPosition) this.setThisSliderPosition(updatingSlider);

    const positioning = [
      ['left', 'width'],
      ['top', 'height'],
    ];
    if (this.isVertical) this.updatePositionHelper(updatingSlider, positioning[1]);
    else this.updatePositionHelper(updatingSlider, positioning[0]);
  }

  setThisSliderPosition({ instance, stepPosition }) {
    this.slidersPosition[instance] = stepPosition;
  }

  // prettier-ignore
  updatePositionHelper(updatingSlider, positioning) {

    // getting the percent of sliderWidth to fieldWidth
    const preperatoryPosition = (parseInt(this.$field.children('.slider').css(positioning[1]), 10)
      / parseInt(this.$field.css(positioning[1]), 10)) * 50;
    const getVerticalPosition = () => `${100 - updatingSlider.stepPosition - preperatoryPosition}%`;
    const getHorizontalPosition = () => `${updatingSlider.stepPosition - preperatoryPosition }%`;
    const position = this.isVertical
      ? getVerticalPosition()
      : getHorizontalPosition();
    this.$field.find(`.instance-${updatingSlider.instance}`).css(positioning[0], position);
  }

  // updateTipPosition(direction) {
  //     this.$field.find('.tip-number .instance-1').css(
  //         direction,
  //         this.$slider.css(direction)
  //         // parseInt(this.$slider.css('width')) / 2
  //     )
  // }
  updateTextNumber(stepValue, instance) {
    this.$field.find(`.instance-${instance} span`).text(`${stepValue}`);
  }
}
