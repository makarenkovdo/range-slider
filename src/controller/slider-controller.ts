/* eslint-env jquery */
import FieldModel from '../model/field-model';
import { Field, Slider } from '../model/modelInterfaces';
import SliderModel from '../model/slider-model';
import SliderView from '../view/slider-view';
import { View } from '../view/viewInterfaces';
import { ControllerBuildParams } from './controllerInterfaces';

export default class SliderController {
  id: string;

  hasBar: boolean;

  isRange: boolean;

  sliderCounter: number;

  field: Field;

  slider: Array<Slider>;

  view: View;

  constructor(id: string, params?: ControllerBuildParams) {
    this.id = id;
    this.hasBar = false;
    this.isRange = false;
    this.sliderCounter = 0;
    this.field = new FieldModel(this.id, this);
    this.slider = [];
    this.view = new SliderView(this.id);
    this.build(params);
  }

  // build(params: ControllerBuildParams) {
  // prettier-ignore
  build(params: ControllerBuildParams):void {
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
        isRange, shouldAddTip, sliderSize, minValue, maxValue,
      })
      // .correctSliderPosition()
      .setStep(step)
      .createBar(shouldAddBar)
      .updateTipNumber(minValue, 0)
      .updateTipNumber(maxValue, 1)
      .onDrag()
      .onDrop()
      .onClick();
  }

  initLayers(sliderSize): this {
    this.field.initDataStartEnd(this.field);
    this.view.initializeValues(sliderSize, this.field.size, this.field.isVertical);
    // this.setMaxValue();
    return this;
  }

  //  prettier-ignore
  createRangeSlider({
    isRange, shouldAddTip, sliderSize, minValue, maxValue,
  }): this {
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

  createSlider(sliderSize, minValue, maxValue): this {
    this.slider.push(
      new SliderModel(this.id, this.sliderCounter, this, sliderSize, this.field.$element),
    );
    this.slider.forEach((v) => v.initializeDefaultValues([minValue, maxValue]));
    return this;
  }

  // correctSliderPosition() {
  //   this.view.correctSliderPosition(this.id);
  //   return this;
  // }

  createSliderView(i): this {
    this.view.createSlider(i, this.field.isVertical);
    return this;
  }

  // createTipNumber(isOn: boolean) {
  createTipNumber(isOn): this {
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

  createBar(shouldAddBar: boolean): this {
    if (shouldAddBar) {
      this.hasBar = true;
      this.view.createBar(this);
    }

    return this;
  }

  // todo NEARES OF TWO RANGES
  onClick(): this {
    this.field.onClick(this.slider, this.isRange);
    this.recieve(this);
    return this;
  }

  onDrag(): this {
    // [this.slider[0].stepPosition]

    $(document).ready(() => {
      this.recieve(this.slider.forEach((v) => v.onDrag(this.slider, this.isRange, this.field)));
    });
    return this;
  }

  onDrop(): this {
    this.slider.forEach((v) => v.onDrop(this.field.$element));
    return this;
  }

  recieve(activeSlider: Slider): this {
    if (activeSlider) {
      this.updateSliderPosition(activeSlider);
      this.updateTipNumber(activeSlider.stepValue, activeSlider.instance);
      if (this.hasBar) this.updateBarPosition(activeSlider);
    }
  }

  updateSliderPosition(activeSlider): this {
    this.view.updateSliderPosition(activeSlider);
  }

  updateTipNumber(stepValue, instance): this {
    this.view.updateTipNumber(stepValue, instance);
    return this;
  }

  updateBarPosition(activeSlider): this {
    this.view.updateBarPosition(this.isRange, activeSlider);
    return this;
  }

  // how to test? read css data-start/end, read this.field.min/max and compare
  setMaxValue(maxValue): this {
    this.field.setMinMax(['maxValue', maxValue]);
    return this;
  }

  setMinValue(minValue): this {
    this.field.setMinMax(['minValue', minValue]);
    return this;
  }

  setStep(step): this {
    this.slider.forEach((v) => v.setStep(step));
    if (step < 1) this.slider.forEach((v) => v.defineSignAfterComma(step));

    return this;
  }
}
