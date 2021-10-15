import './../index.scss'
import jquery from 'jquery'
import SliderModel from '../model/slider-model'

class SliderView extends SliderModel {
    addSliderButton(id) {
        $(`#${id}`).each(function (index, el) {
            $(this).append('<span class="slider-toggler"></span>')
        })
    }
    addRangeNumber(id) {
        $(`#${id}`).each(function (index, el) {
            $(this).append('<span class="range-number"><span>0</span></span>')
        })
    }
    updatePosition(that) {
        console.log('that', that.rangeSlider)
        console.log('thatEl', that.rangeSlider.$element)
        console.log('thatPose', that.rangeSlider.positionInPercentage)

        const elViewPosition =
            that.rangeSlider.positionInPercentage -
            that.rangeSlider.$element.innerWidth() / 6
        that.rangeSlider.$element.css('left', elViewPosition + '%')
        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(numbersArray) {
        numbersArray[0].find('span').text(numbersArray[1])
    }
}

export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
