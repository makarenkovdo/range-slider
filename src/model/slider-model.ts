/* eslint-env jquery */

import SliderController from '../controller/slider-controller';
import FieldModel from './field-model';
import { Field, Slider } from './modelInterfaces';
import defineSignAfterComma from './slider-modules/defineSignAfterComma';
import initializeDefaultValues from './slider-modules/initializeDefaultValues';
import notify from './slider-modules/notify';
import onDrag from './slider-modules/onDrag';
import { updatePosition } from './slider-modules/onDrag/onDragUtility';
import onDrop from './slider-modules/onDrop';
import setStep from './slider-modules/setStep';

class SliderModel {
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

  updatePosition: (
    event: JQuery.ClickEvent,
    field: FieldModel,
    sliders: SliderModel[],
    isRange: boolean,
    slider: SliderModel,
  ) => void;

  initializeDefaultValues: (a: number[]) => void;

  constructor(
    id: string,
    instance: number,
    subscriber: SliderController,
    sliderSize: number[],
    $field: JQuery<HTMLElement>,
  ) {
    this.id = id;
    this.class = $(`#${this.id}`).attr('class');
    this.$field = $field;
    this.instance = instance;
    // this.$slider = '';
    this.size = sliderSize;
    this.positionInPercent = 0;
    this.value = 0;
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.stepPosition = 0;
    this.stepValue = 0;
    this.subscriber = subscriber;

    this.defineSignAfterComma = defineSignAfterComma.bind(this) as () => void;
    this.onDrag = onDrag.bind(this) as () => void;
    this.onDrop = onDrop;
    this.notify = notify.bind(this) as () => void;
    this.setStep = setStep.bind(this) as () => void;
    this.updatePosition = updatePosition.bind(this) as () => void;
    this.initializeDefaultValues = initializeDefaultValues.bind(this) as () => void;
  }
}
export default SliderModel;
