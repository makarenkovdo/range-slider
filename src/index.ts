import jquery from 'jquery'
import SliderController from './controller/slider-controller'
import SliderInputModel from './model/slider-input-model'

const firstSlider = new SliderController('first').setOptions({
    switchOnTip: true,
    shouldAddBar: true,
    maxValue: 1,
    step: 0.001,
    isRange: true,
})

const secondSlider = new SliderController('second').setOptions({
    switchOnTip: true,
    shouldAddBar: true,
    step: 10,
    isRange: true,
})

const thirdSlider = new SliderController('third').setOptions({
    switchOnTip: true,
    isRange: true,
    shouldAddBar: true,
})
const fourthSlider = new SliderController('fourth').setOptions({})

const temporarySlider = new SliderInputModel('df')
