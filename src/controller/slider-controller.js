import SliderModel from '../model/slider-model'
import { sliderView } from '../view/slider-view'

export default class SliderController {
    constructor(id) {
        this.id = id
        this.rangeSlider = new SliderModel(this.id)
    }
    init() {
        ;[
            this.$element,
            this.$parent,
            this.minValue,
            this.maxValue,
            this.class,
            this.isVertical,
        ] = this.rangeSlider.init()
        console.log(this.rangeSlider)
        return this
    }
    addSliderButton() {
        sliderView.addSliderButton(this.id)
        return this
    }
    switchOnTip() {
        sliderView.addRangeNumber(this.id)
        return this
    }
    onDrag() {
        this.rangeSlider.onDrag(this.updatePosition.bind(this), this.updateText)
        return this
    }
    updatePosition(updateArray) {
        console.log(this)
        console.log(this.rangeSlider)
        sliderView.updatePosition(updateArray)
    }
    updateText(updateArray) {
        sliderView.updateTextNumber(updateArray)
    }
    onDrop() {
        this.rangeSlider.onDrop()
        return this
    }
    setMaxValue(number) {
        this.rangeSlider.setMaxValue(number)
        return this
    }
    setMinValue(number) {
        this.rangeSlider.setMinValue(number)
        return this
    }
}
