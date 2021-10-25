import SliderController from '../controller/slider-controller';
import { Slider } from '../model/modelInterfaces';

interface View {
  $field: JQuery<HTMLElement>;

  $slider: string;

  $bar: string;

  isVertical: boolean;

  slidersPosition: number[];

  sliderSize: number[];

  stepSignAfterComma: number;

  corrector: number;

  createBar: (that: SliderController) => void;

  createSlider: (i: number, isVertical: boolean) => void;

  createTipNumber: (sliderCounter: number, isVertical: boolean) => void;

  updateBarPosition: (isRange: boolean, activeSlider: Slider) => void;

  updateTipNumber: (stepValue: number, instance: number) => void;

  updateSliderPosition: (activeSlider: Slider) => void;

  initializeValues: (sliderSize: number[], size: string[], isVertical: boolean) => void;
}

export default View;
