import RangeSlider from '../model/slider-model'
import { sliderView } from '../view/slider-view'
const rangeSlider = new RangeSlider()

class SliderController {
    newInstance() {
        rangeSlider.init(sliderView.addRangeNumber)
        return this
    }
    onDrag() {
        console.log('???')
        rangeSlider.onDrag(this.updateView, rangeSlider.updateValues)
        return this
    }
    updateView(positionsArray) {
        console.log(positionsArray)
        sliderView.updatePosition(positionsArray)
    }
    onDrop() {
        rangeSlider.onDrop()
    }
}
export const newSlider = new SliderController()
