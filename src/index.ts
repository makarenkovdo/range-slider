import jquery from 'jquery'
import SliderController from './controller/slider-controller'

const firstSlider = new SliderController('first')
// .switchOnTip()
// .setMinValue(5)
// .setMaxValue(77)
// .init()
// .onDrag()
// .onDrop()
const secondSlider = new SliderController('second').optionalBuild({
    switchOnTip: true,
})
// .switchOnTip()
// .setMaxValue(333)
// .init()
// .onDrag()
// .onDrop()
const thirdSlider = new SliderController('third', {})
// .addSliderButton()
// .setMaxValue(123)
// .init()
// .onDrag()
// .onDrop()

/*for configurate initial parameters just send attributes to builder and
and give user possibility to change it 
*/
