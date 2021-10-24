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
import initializeValues from './view-modules/initializeValues';

export default class SliderView {
  $field: JQuery<HTMLElement>;

  $slider: string;

  $bar: string;

  isVertical: boolean;

  slidersPosition: number[];

  sliderSize: number[];

  stepSignAfterComma: number;

  corrector: number;

  createBar: () => void;

  createSlider: () => void;

  createTipNumber: () => void;

  updateBarPosition: () => void;

  updateTipNumber: () => void;

  updateSliderPosition: () => void;

  initializeValues: () => void;

  constructor(id: string) {
    this.$field = $(`#${id}`);
    this.$slider = '';
    this.$bar = '';
    this.isVertical = false;
    this.slidersPosition = [0, 100];
    this.sliderSize = [];
    this.stepSignAfterComma = 0;
    this.corrector = 0;

    this.createBar = createBar.bind(this);
    this.createSlider = createSlider.bind(this);
    this.createTipNumber = createTipNumber.bind(this);
    this.updateBarPosition = updateBarPosition.bind(this);
    this.updateTipNumber = updateTipNumber.bind(this);
    this.updateSliderPosition = updateSliderPosition.bind(this);
    this.initializeValues = initializeValues.bind(this);
  }
}
