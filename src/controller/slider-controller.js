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
//   positionInPercentage: number;
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

    this.setMinValue(minValue)
      .setMaxValue(maxValue)
      .initDataStartEnd()
      .createRangeSlider(isRange, shouldAddTip, sliderSize)
      // .correctSliderPosition()
      .setStep(step)
      .addBar(shouldAddBar)
      .updateText(minValue, 0)
      .updateText(maxValue, 1)
      .onDrag()
      .onDrop()
      .onClick();
   
  }

  initDataStartEnd() {
    this.field.initDataStartEnd();
    // this.setMinValue();
    // this.setMaxValue();
    return this;
  }

  createRangeSlider(isRange, shouldAddTip, sliderSize) {
    this.createSlider(sliderSize);
    this.addSliderView(this.sliderCounter);
    this.addTipNumber(shouldAddTip);
    if (isRange) {
      this.sliderCounter += 1;
      this.isRange = true;
      this.field.isRange = true;
      this.addSliderView(this.sliderCounter);
      this.createSlider(sliderSize);
      this.addTipNumber(shouldAddTip);
    } else this.isRange = false;
    return this;
  }

  createSlider(sliderSize) {
    this.slider.push(new SliderModel(this.id, this.sliderCounter, this, sliderSize));
    this.slider.forEach((v) => v.init(this.minValue, this.maxValue, sliderSize));
    this.view.initValues(this, sliderSize, this.field.size);
    return this;
  }

  // correctSliderPosition() {
  //   this.view.correctSliderPosition(this.id);
  //   return this;
  // }

  addSliderView(i) {
    this.view.addSlider(i);
    return this;
  }

  // addTipNumber(isOn: boolean) {
  addTipNumber(isOn) {
    if (isOn) {
      this.view.addTipNumber(
        this.id,
        this.sliderCounter,
        this.field.isVertical,
        [this.field.minValue, this.field.maxValue],
        this.slider[0].step,
      );
    }
    return this;
  }

  addBar(shouldAddBar) {
    this.hasBar = true;
    if (shouldAddBar) {
      this.view.addBar(this);
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
      this.recieve(this.slider.forEach((v) => v.onDrag(this.field, this.slider, this.isRange)));
    });
    return this;
  }

  onDrop() {
    this.slider.forEach((v) => v.onDrop());
    return this;
  }

  recieve(updatingSlider) {
    if (updatingSlider) {
      this.updatePosition(updatingSlider);
      this.updateText(updatingSlider.stepValue, updatingSlider.instance);
      this.updateBar(updatingSlider);
    }
  }

  updatePosition(that) {
    this.view.updatePosition(that);
  }

  updateText(stepValue, instance) {
    this.view.updateTextNumber(stepValue, instance);
    return this;
  }

  updateBar(that) {
    if (this.isRange) this.view.updateRangeBar(this);
    else this.view.updateBar(that);
    return this;
  }

  // how to test? read css data-start/end, read this.field.min/max and compare
  setMaxValue(maxValue) {
    this.field.setMinMax(['maxValue', 'end', maxValue]);
    return this;
  }

  setMinValue(minValue) {
    this.field.setMinMax(['minValue', 'start', minValue]);
    return this;
  }

  setStep(interval) {
    this.slider.forEach((v) => v.setStep(interval));
    return this;
  }
}
