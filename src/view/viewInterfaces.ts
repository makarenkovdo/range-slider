import SliderController from '../controller/slider-controller';
import SliderModel from '../model/slider-model';

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

  updateBarPosition: (isRange: boolean, activeSlider: SliderModel) => void;

  updateTipNumber: (stepValue: number, instance: number) => void;

  updateSliderPosition: (activeSlider: SliderModel) => void;

  initializeValues: (sliderSize: number[], size: string[], isVertical: boolean) => void;
}

export default View;
