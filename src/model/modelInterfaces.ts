import SliderController from '../controller/slider-controller';

interface Field {
  $element: JQuery<HTMLElement>;

  class: string;

  size: Array<string>;

  id: string;

  minValue: number;

  maxValue: number;

  step: number;

  stepSignAfterComma: number;

  isVertical: boolean;

  isRange: boolean;

  subscriber: object;

  isBarAdded: boolean;

  range: [];

  notify: () => void;

  setMinMax: (args: Array<string | number>) => void;

  onClick: (slider: Slider[], isRange: boolean) => void;

  initDataStartEnd: (field: Field) => void;
}

interface Slider {
  id: string;
  class: string;
  $field: JQuery<HTMLElement>;
  instance: number;
  $slider: JQuery<HTMLElement>;
  size: number[];
  positionInPercent: number;
  value: number;
  step: number;
  stepSignAfterComma: number;
  stepPosition: number;
  stepValue: number;
  subscriber: SliderController;

  defineSignAfterComma: (step: number) => void;
  onDrag: (slider: Slider[], isRange: boolean, field: Field) => void;
  onDrop: ($element: JQuery<HTMLElement>) => void;
  notify: () => void;
  setStep: (step: number) => void;
  updatePosition: () => void;
  initializeDefaultValues: (a: number[]) => void;
}

export { Field, Slider };
