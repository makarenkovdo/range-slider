import jquery from 'jquery'
import SliderController from './controller/slider-controller'

const firstSlider = new SliderController('first')

const secondSlider = new SliderController('second').setOptions({
    switchOnTip: true,
})

const thirdSlider = new SliderController('third', {})
