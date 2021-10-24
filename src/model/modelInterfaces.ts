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

  setMinMax: () => void;

  onClick: () => void;

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
  subscriber: Controller;

  defineSignAfterComma: () => void;
  onDrag: () => void;
  onDrop: () => void;
  notify: () => void;
  setStep: () => void;
  updatePosition: () => void;
  initializeDefaultValues: (a: number[]) => void;
}

export { Field, Slider };
