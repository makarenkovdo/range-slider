/* eslint-disable padded-blocks */
/* eslint-env jquery */
import '../index.scss';
// import { addSliderToDom, prepareSliderArgs } from './view-modules/createSliderView';
import createBar from './view-modules/createBar';
import createSlider from './view-modules/createSlider';
import createTipNumber from './view-modules/createTipNumber';
import updateTipNumber from './view-modules/updateTipNumber';
import updateBarPosition from './view-modules/updateBarPosition';
import updateSliderPosition from './view-modules/updateSliderPosition';

export default class SliderView {
  constructor(id) {
    this.$field = $(`#${id}`);
    this.$slider = '';
    this.slidersPosition = [0, 100];
    this.$bar = '';
    this.sliderSize = [];
    this.isVertical = false;
    this.stepSignAfterComma = 0;
    this.corrector = 0;

    this.createBar = createBar.bind(this);
    this.createSlider = createSlider.bind(this);
    this.createTipNumber = createTipNumber.bind(this);
    this.updateBarPosition = updateBarPosition.bind(this);
    this.updateTipNumber = updateTipNumber.bind(this);
    this.updateSliderPosition = updateSliderPosition.bind(this);
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
}
