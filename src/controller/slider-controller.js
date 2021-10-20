import FieldModel from '../model/field-model'
import SliderModel from '../model/slider-model'
import SliderView from '../view/slider-view'

export default class SliderController {
    constructor(id, params) {
        this.id = id
        this.hasBar = false
        this.hasRange = false
        this.isRange = false
        this.sliderCounter = -1
        this.field = new FieldModel(this.id, this)
        this.slider = []
        this.view = new SliderView(this.id, this)
        this.build()
    }
    build() {
        this.init()
            .createSlider()
            .addSliderView(this.sliderCounter)
            .correctSliderPosition()
            .onDrag()
            .onDrop()
            .onClick()
    }
    setOptions({
        switchOnTip = false,
        minValue = 0,
        maxValue = 100,
        shouldAddBar = false,
        step = 1,
        isRange = false,
    }) {
        this.switchOnTip(switchOnTip)
            .createRangeSlider(isRange)
            .setMinValue(minValue)
            .setMaxValue(maxValue)
            // .init()
            .correctSliderPosition()
            .addBar(shouldAddBar)
            .setStep(step)
            .updateText(minValue, 0)
            .updateText(maxValue, 1)
    }
    init() {
        this.field.init()
        this.setMinValue()
        this.setMaxValue()
        return this
    }
    createRangeSlider(isRange) {
        if (isRange) {
            this.isRange = true
            this.field.isRange = true
            this.createSlider()
            this.addSliderView(this.sliderCounter)
            this.switchOnTip(true)
        } else this.isRange = false
        return this
    }

    createSlider(isRange) {
        this.sliderCounter += 1
        this.isRange = true
        this.slider.push(new SliderModel(this.id, this.sliderCounter, this))
        this.slider.forEach((v) => v.init(this.minValue, this.maxValue))
        this.view.initValues(this, this.sliderCounter)
        return this
    }
    correctSliderPosition() {
        this.view.correctSliderPosition(this.id)
        return this
    }

    addSliderView(i) {
        this.view.addSlider(this.id, i, this.field.isVertical, [
            this.field.minValue,
            this.field.maxValue,
        ])
        return this
    }
    switchOnTip(isOn) {
        isOn
            ? this.view.addTipNumber(
                  this.id,
                  this.sliderCounter,
                  this.field.isVertical,
                  [this.field.minValue, this.field.maxValue],
                  this.slider[0].step
              )
            : false
        return this
    }
    addBar(shouldAddBar) {
        this.hasBar = true
        if (shouldAddBar) {
            this.view.addBar(this)
        }

        return this
    }

    onClick() {
        //todo NEARES OF TWO RANGES
        this.field.onClick.call(this)
        this.recieve(this)
        return this
    }
    onDrag() {
        // [this.slider[0].stepPosition]
        $(document).ready(() =>
            this.recieve(
                this.slider.forEach((v) =>
                    v.onDrag(this.field, this.slider, this.isRange)
                )
            )
        )
        return this
    }
    onDrop() {
        this.slider.forEach((v) => v.onDrop())
        return this
    }
    recieve(updatingSlider) {
        if (updatingSlider) {
            this.updatePosition(updatingSlider)
            this.updateText(updatingSlider.stepValue, updatingSlider.instance)
            this.updateBar(updatingSlider)
        }
    }
    updatePosition(that) {
        this.view.updatePosition(that)
    }
    updateText(stepValue, instance) {
        this.view.updateTextNumber(stepValue, instance)
        return this
    }
    updateBar(that) {
        this.isRange
            ? this.view.updateRangeBar(this)
            : this.view.updateBar(that)
        return this
    }
    setMaxValue(maxValue) {
        this.field.setMaxValue(maxValue)
        return this
    }
    setMinValue(minValue) {
        this.field.setMinValue(minValue)
        return this
    }
    setStep(interval) {
        this.slider.forEach((v) => v.setStep(interval))
        return this
    }
}
