import jquery from 'jquery'
import SliderController from './controller/slider-controller'

const firstSlider = new SliderController('first').setOptions({
    switchOnTip: true,
    shouldAddBar: true,
    maxValue: 1,
    step: 0.001,
})

const secondSlider = new SliderController('second').setOptions({
    switchOnTip: true,
    shouldAddBar: true,
    step: 1,
})

const thirdSlider = new SliderController('third').setOptions({
    switchOnTip: true,
})
const fourthSlider = new SliderController('fourth').setOptions({
    switchOnTip: false,
})
