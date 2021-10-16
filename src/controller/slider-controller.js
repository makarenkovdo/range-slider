import SliderModel from '../model/slider-model'
import { sliderView } from '../view/slider-view'

export default class SliderController {
    constructor(id, params) {
        this.id = id
        this.rangeSlider = new SliderModel(this.id, this)
        this.build(params)
    }
    build() {
        this.switchOnTip(false)
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
    }) {
        this.switchOnTip(switchOnTip)
            .setMinValue(minValue)
            .setMaxValue(maxValue)
            .init()
            .addBar(shouldAddBar)
            .setStep(step)
    }
    init() {
        this.rangeSlider.init()
        console.log(this)
        return this
    }
    addSliderButton() {
        sliderView.addSliderButton(this.id)
        return this
    }
    switchOnTip(isOn) {
        isOn ? sliderView.addRangeNumber(this.id) : this.addSliderButton()
        return this
    }
    addBar(shouldAddBar) {
        this.rangeSlider.isBarAdded = true
        shouldAddBar ? sliderView.addBar.call(this, this.id) : null
        return this
    }
    updateBar() {
        sliderView.updateBar.call(this.rangeSlider)
        return this
    }
    onDrag() {
        this.rangeSlider.onDrag(this.updatePosition.bind(this), this.updateText)
        this.recieve(this)
        return this
    }
    onClick() {
        this.rangeSlider.onClick(
            this.updatePosition.bind(this),
            this.updateText
        )
        this.recieve(this)
        return this
    }
    recieve() {
        this.updatePosition()
        this.updateBar(true)
        this.updateText()
    }
    updatePosition() {
        sliderView.updatePosition.call(this.rangeSlider)
    }
    updateText() {
        sliderView.updateTextNumber.call(this.rangeSlider)
    }
    onDrop() {
        this.rangeSlider.onDrop()
        return this
    }
    setMaxValue(maxValue) {
        this.rangeSlider.setMaxValue(maxValue)
        return this
    }
    setMinValue(minValue) {
        this.rangeSlider.setMinValue(minValue)
        return this
    }
    setStep(interval) {
        this.rangeSlider.setStep(interval)
    }
}
