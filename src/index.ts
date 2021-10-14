import jquery from 'jquery'

import { newSlider } from './controller/slider-controller'

newSlider.newInstance().setMaxValue(77).onDrag().onDrop()

//создавать нужно тут new Slider('#айдишник')
