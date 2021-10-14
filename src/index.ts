import jquery from 'jquery'
import SliderController from './controller/slider-controller'

//создавать нужно тут new Slider('#айдишник')
const firstSlider = new SliderController('first')
const secondSlider = new SliderController('second')
const thirdSlider = new SliderController('third')
firstSlider.switchOnTip().setMaxValue(77).onDrag().onDrop()
secondSlider.switchOnTip().setMaxValue(333).onDrag().onDrop()
thirdSlider.switchOnTip().setMaxValue(123).onDrag().onDrop()
