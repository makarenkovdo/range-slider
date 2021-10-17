import FieldModel from '../model/field-model'
import SliderModel from '../model/slider-model'
import SliderView from '../view/slider-view'

export default class SliderController {
    constructor(id, params) {
        this.id = id
        this.hasBar = false
        this.hasRange = false
        this.sliderCounter = -1
        this.field = new FieldModel(this.id, this)
        this.slider = []
        this.view = []
        this.build()
    }
    build() {
        this.createSlider(true)
            .switchOnTip(false)
            .setMinValue(0)
            .setMaxValue(100)
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
        isRange = false,
    }) {
        this.createSlider(isRange)
            .switchOnTip(switchOnTip)
            .setMinValue(minValue)
            .setMaxValue(maxValue)
            .init()
            .addBar(shouldAddBar)
            .setStep(step)
    }
    init() {
        this.field.init()
        this.slider.forEach((v) => v.init())
        console.log('оно', this.view[0])
        console.log(this.view[this.sliderCounter], this.sliderCounter)
        this.view[this.sliderCounter].initValues(this, this.sliderCounter)
        // this.view.forEach((v, i) => v.initValues())

        return this
    }

    createSlider(isRange) {
        if (isRange) {
            this.sliderCounter++
            this.slider.push(new SliderModel(this.id, this))
            this.view.push(new SliderView(this.id, this))
            this.addSliderView(this.sliderCounter)
        }
        return this
    }

    addSliderView(i) {
        this.view[i].addSlider(this.id)
    }
    switchOnTip(isOn) {
        isOn ? this.view.forEach((v) => v.addRangeNumber.call(this)) : false
        return this
    }
    addBar(shouldAddBar) {
        this.hasBar = true
        shouldAddBar ? this.view.forEach((v) => v.addBar.call(this)) : null
        return this
    }
    addRange(isRange) {
        // isRange ? true : false
    }

    onDrag() {
        this.recieve(this.slider.forEach((v) => v.onDrag(this.field)))
        return this
    }
    onClick() {
        this.field.onClick()
        this.recieve(this) //todo copy onDrag
        return this
    }
    recieve(that) {
        this.updatePosition(that)
        this.updateBar(true)
        this.updateText(that)
    }
    updatePosition(that) {
        console.log('that', that)
        this.view.forEach((v) => v.updatePosition(that))
    }
    updateText(that) {
        this.view.forEach((v) => v.updateTextNumber(that))
    }
    updateBar(that) {
        this.view.forEach((v) => v.updateBar(true, that))
        return this
    }
    onDrop() {
        this.slider.forEach((v) => v.onDrop())
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
