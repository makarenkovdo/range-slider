import jquery from 'jquery'
import SliderController from './controller/slider-controller'

//создавать нужно тут new Slider('#айдишник')
const firstSlider = new SliderController('first')
const secondSlider = new SliderController('second')
const thirdSlider = new SliderController('third')
firstSlider
    .switchOnTip()
    .setMinValue(5)
    .setMaxValue(77)
    .init()
    .onDrag()
    .onDrop()
secondSlider.switchOnTip().setMaxValue(333).init().onDrag().onDrop()
thirdSlider.addSliderButton().setMaxValue(123).init().onDrag().onDrop()

/*for configurate initial parameters just send attributes to builder and
and give user possibility to change it 
*/
