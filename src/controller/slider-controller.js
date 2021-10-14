import SliderModel from '../model/slider-model'
import { sliderView } from '../view/slider-view'

export default class SliderController {
    constructor(id) {
        this.id = id
        this.rangeSlider = new SliderModel(this.id)
    }
    switchOnTip() {
        sliderView.addRangeNumber(this.id)
        return this
    }
    onDrag() {
        this.rangeSlider.onDrag(this.updateView, this.rangeSlider.updateValues)
        return this
    }
    updateView(positionsArray) {
        sliderView.updatePosition(positionsArray)
    }
    onDrop() {
        this.rangeSlider.onDrop()
        return this
    }
    setMaxValue(number) {
        this.rangeSlider.setMaxValue(number)
        return this
    }
}
