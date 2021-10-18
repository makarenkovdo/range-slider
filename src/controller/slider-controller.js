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
        this.createSlider(true)
            .correctSliderPosition()
            .init()
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
        isRange = true,
    }) {
        this.createSlider(isRange)
            .switchOnTip(switchOnTip)
            .setMinValue(minValue)
            .setMaxValue(maxValue)
            .init()
            .correctSliderPosition()
            .addBar(shouldAddBar)
            .setStep(step)
    }
    init() {
        this.field.init()
        this.slider.forEach((v) => v.init())
        this.view.initValues(this, this.sliderCounter)
        // this.view.forEach((v, i) => v.initValues())

        return this
    }

    createSlider(isRange) {
        if (isRange) {
            this.isRange = true
            this.sliderCounter++
            this.slider.push(new SliderModel(this.id, this.sliderCounter, this))
            // this.view.push(new SliderView(this.id, this))

            this.addSliderView(this.sliderCounter)
        }
        return this
    }
    correctSliderPosition() {
        this.view.correctSliderPosition(this.id)
        return this
    }

    addSliderView(i) {
        this.view.addSlider(this.id, i)
    }
    switchOnTip(isOn) {
        isOn ? this.view.addRangeNumber.call(this) : false
        return this
    }
    addBar(shouldAddBar) {
        this.hasBar = true
        // if (this.isRange && shouldAddBar) {
        //     this.view.addRangeBar.call(this)
        // } else
        if (shouldAddBar) {
            this.view.addBar.call(this)
        }

        return this
    }
    addRange(isRange) {
        // isRange ? true : false
    }
    onClick() {
        this.field.onClick.call(this)
        this.recieve(this) //todo copy onDrag
        return this
    }
    onDrag() {
        $(document).ready(() =>
            this.recieve(this.slider.forEach((v) => v.onDrag(this.field)))
        )
        return this
    }
    onDrop() {
        this.slider.forEach((v) => v.onDrop())
        return this
    }
    recieve(that) {
        if (that) {
            this.updatePosition(that)
            this.updateText(that)
            this.updateBar(that)
        }
    }
    updatePosition(that) {
        this.view.updatePosition(that)
    }
    updateText(that) {
        this.view.updateTextNumber(that)
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
    }
}
