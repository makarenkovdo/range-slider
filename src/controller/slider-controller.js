/* eslint-env jquery */
import FieldModel from '../model/field-model';
import SliderModel from '../model/slider-model';
import SliderView from '../view/slider-view';

// interface Field {
//   isRange: boolean;
//   init: () => void;
// }
// interface Controller {
//   isRange: boolean;
//   init: () => void;
// }
// interface Slider {
//   id: string;
//   instance: number;
//   $element: string;
//   class: string;
//   positionInPercent: number;
//   value: number;
//   step: number;
//   stepSignAfterComma: number;
//   stepPosition: number;
//   stepValue: number;
//   subscriber: Function;
//   init: (a: number, b: number) => void;
//   defineSignAfterComma: () => void;
//   notify: () => void;
//   setStep: (a: number) => void;
//   onDrag: (field: Field, slider: Slider, hasRange: boolean) => void;
//   measurePosition: (
//     event: JQuery.TriggeredEvent<HTMLElement>,
//     field: Field,
//     slider: Slider,
//     hasRange: boolean,
//   ) => void;
//   checkCollision: (stepPosition: number, stepValue: number, slider: Slider) => void;
//   checkBordersCollision: (stepPosition: number, slider: Slider) => void;
//   onDrop: () => void;
// }
// interface View {
//   id: string;
//   $element: string;
//   $parent: string;
//   isVertical: boolean;
//   stepSignAfterComma: number;
//   addSlider(i, isVert, minMax);
//   init: (a: number, b: number) => void;
//   defineSignAfterComma: () => void;
//   notify: () => void;
//   initValues: () => void;
// }
// interface ControllerBuildParams {}

export default class SliderController {
  // id: string;

  // hasBar: boolean;

  // isRange: boolean;

  // sliderCounter: number;

  // field: Field;

  // slider: Array<Slider>;

  // view: View;

  // constructor(id: string, params?: ControllerBuildParams) {
  constructor(id, params = {}) {
    this.id = id;
    this.hasBar = false;
    this.isRange = false;
    this.sliderCounter = 0;
    this.field = new FieldModel(this.id, this);
    this.slider = [];
    this.view = new SliderView(this.id, this);
    this.build(params);
  }

  // build(params: ControllerBuildParams) {
  // prettier-ignore
  build(params) {
    let {
      minValue = 0,
      maxValue = 100,
      step = 1,
    } = params;

    const {
      shouldAddTip = false, shouldAddBar = false, isRange = false, sliderSize = [40, 40],
    } = params;

    const checkedValues = () => {
      if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
      } else if (minValue === maxValue) {
        minValue = 0;
        maxValue = 100;
      }

      if (step <= 0) {
        step = 1;
      }
      if (sliderSize[0] <= 0 || sliderSize[1] <= 0) {
        sliderSize[0] = 40;
        sliderSize[1] = 40;
      }
    };
    checkedValues();

    this.setMinValue(minValue)
      .setMaxValue(maxValue)
      .initLayers(sliderSize)
      .createRangeSlider({
        isRange, shouldAddTip, sliderSize, minValue, maxValue
      })
      // .correctSliderPosition()
      .setStep(step)
      .createBar(shouldAddBar)
      .updateText(minValue, 0)
      .updateText(maxValue, 1)
      .onDrag()
      .onDrop()
      .onClick();
  }

  initLayers(sliderSize) {
    this.field.initDataStartEnd();
    this.view.initializeValues(sliderSize, this.field.size, this.field.isVertical);
    // this.setMaxValue();
    return this;
  }

  createRangeSlider({ isRange, shouldAddTip, sliderSize, minValue, maxValue }) {
    this.createSliderView(this.sliderCounter);
    this.createSlider(sliderSize, minValue, maxValue);
    this.createTipNumber(shouldAddTip);

    if (isRange) {
      this.sliderCounter += 1;
      this.isRange = true;
      this.field.isRange = true;
      this.createSliderView(this.sliderCounter);
      this.createSlider(sliderSize, minValue, maxValue);

      this.createTipNumber(shouldAddTip);
    } else this.isRange = false;
    return this;
  }

  createSlider(sliderSize, minValue, maxValue) {
    this.slider.push(
      new SliderModel(this.id, this.sliderCounter, this, sliderSize, this.field.$element),
    );
    this.slider.forEach((v) => v.initializeDefaultPositionAndValue([minValue, maxValue]));
    return this;
  }

  // correctSliderPosition() {
  //   this.view.correctSliderPosition(this.id);
  //   return this;
  // }

  createSliderView(i) {
    this.view.createSliderView(i, this.field.isVertical);
    return this;
  }

  // createTipNumber(isOn: boolean) {
  createTipNumber(isOn) {
    if (isOn) {
      this.view.createTipNumber(
        this.sliderCounter,
        this.field.isVertical,
        // [this.field.minValue, this.field.maxValue],
        // this.slider[0].step,
      );
    }
    return this;
  }

  createBar(shouldAddBar) {
    this.hasBar = true;
    if (shouldAddBar) {
      this.view.createBar(this);
    }

    return this;
  }

  // todo NEARES OF TWO RANGES
  onClick() {
    this.field.onClick(this.isRange, this.slider);
    this.recieve(this);
    return this;
  }

  onDrag() {
    // [this.slider[0].stepPosition]

    $(document).ready(() => {
      this.recieve(this.slider.forEach((v) => v.onDrag(this.slider, this.isRange, this.field)));
    });
    return this;
  }

  onDrop() {
    this.slider.forEach((v) => v.onDrop());
    return this;
  }

  recieve(activeSlider) {
    if (activeSlider) {
      this.updatePosition(activeSlider);
      this.updateText(activeSlider.stepValue, activeSlider.instance);
      this.updateBar(activeSlider);
    }
  }

  updatePosition(activeSlider) {
    this.view.updatePosition(activeSlider);
  }

  updateText(stepValue, instance) {
    this.view.updateTextNumber(stepValue, instance);
    return this;
  }

  updateBar(activeSlider) {
    this.view.updateBar(this.isRange, activeSlider);
    return this;
  }

  // how to test? read css data-start/end, read this.field.min/max and compare
  setMaxValue(maxValue) {
    this.field.setMinMax(['maxValue', maxValue]);
    return this;
  }

  setMinValue(minValue) {
    this.field.setMinMax(['minValue', minValue]);
    return this;
  }

  setStep(step) {
    this.slider.forEach((v) => v.setStep(step));
    if (step < 1) this.slider.forEach((v) => v.defineSignAfterComma(step));

    return this;
  }
}
