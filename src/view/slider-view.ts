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
import SliderController from '../controller/slider-controller';
import SliderModel from '../model/slider-model';
import { UpdateTipNumberArgs } from './viewInterfaces';

export default class SliderView {
  $field: JQuery<HTMLElement>;

  $slider: JQuery<HTMLElement>;

  $bar: JQuery<HTMLElement>;

  isVertical: boolean;

  slidersPosition: number[];

  sliderSize: number[];

  fieldSize: number[];

  stepSignAfterComma: number;

  corrector: number;

  createBar: (that: SliderController) => void;

  createSlider: (i: number, isVertical: boolean) => void;

  createTipNumber: (sliderCounter: number, isVertical: boolean) => void;

  updateBarPosition: (isRange: boolean, activeSlider: SliderModel) => void;

  updateTipNumber: (obj: UpdateTipNumberArgs) => void;

  updateSliderPosition: (activeSlider: SliderModel) => void;

  initializeValues: (sliderSize: number[], size: string[], isVertical: boolean) => void;

  constructor(id: string) {
    this.$field = $(`#${id}`);
    // this.$slider = '';
    // this.$bar = '';
    this.isVertical = false;
    this.slidersPosition = [0, 100];
    this.sliderSize = [];
    this.stepSignAfterComma = 0;
    this.corrector = 0;

    this.createBar = createBar.bind(this) as () => void;
    this.createSlider = createSlider.bind(this) as () => void;
    this.createTipNumber = createTipNumber.bind(this) as () => void;
    this.updateBarPosition = updateBarPosition.bind(this) as () => void;
    this.updateTipNumber = updateTipNumber.bind(this) as () => void;
    this.updateSliderPosition = updateSliderPosition.bind(this) as () => void;
    this.initializeValues = initializeValues.bind(this) as () => void;
  }
}
