interface View {
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

  initializeValues: (sliderSize: number[], size: string[], isVertical: boolean) => void;
}

export { View };
