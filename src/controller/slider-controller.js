import SliderModel from '../model/slider-model'
import { sliderView } from '../view/slider-view'

export default class SliderController {
    constructor(id) {
        this.id = id
        this.rangeSlider = new SliderModel(this.id, this)
        this.build()
    }
    build() {
        this.switchOnTip()
            .setMinValue(5)
            .setMaxValue(77)
            .init()
            .onDrag()
            .onDrop()
    }
    init() {
        // ;[
        //     this.$element,
        //     this.$parent,
        //     this.minValue,
        //     this.maxValue,
        //     this.class,
        //     this.isVertical,
        // ] =
        this.rangeSlider.init()
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
        console.log(this)
        this.rangeSlider.onDrag(this.updatePosition.bind(this), this.updateText)
        this.recieve(this)
        return this
    }
    recieve() {
        this.updatePosition()
    }
    updatePosition() {
        // console.log(this)
        sliderView.updatePosition(this)
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
