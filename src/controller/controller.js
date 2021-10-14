import RangeSlider from './../model/slider-init'
import { addRangeNumber } from './../view/slider-number'
const rangeSlider = new RangeSlider()

class SliderInstance {
    newInstance() {
        rangeSlider.init(addRangeNumber)
        return this
    }
    onDrag() {
        rangeSlider.onDrag().onDrop()
    }
}
export const newSlider = new SliderInstance()
