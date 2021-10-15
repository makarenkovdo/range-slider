import './../index.scss'
import jquery from 'jquery'
import SliderModel from '../model/slider-model'

class SliderView extends SliderModel {
    addSliderButton(id) {
        $(`#${id}`).each(function (index, el) {
            //TODO id?
            $(this).append('<span class="slider-toggler"></span>')
        })
    }
    addRangeNumber(id) {
        $(`#${id}`).find('.slider-toggler').remove()
        $(`#${id}`).append('<span class="range-number"><span>0</span></span>')
    }
    updatePosition(that) {
        const thisRangeSlider = that.rangeSlider
        if (thisRangeSlider.isVertical) {
            const elViewPosition =
                thisRangeSlider.positionInPercentage -
                thisRangeSlider.$element.innerHeight() / 6
            thisRangeSlider.$element.css(
                'top',
                thisRangeSlider.$element.innerHeight() - elViewPosition + '%'
            )
        } else {
            const elViewPosition =
                thisRangeSlider.positionInPercentage -
                thisRangeSlider.$element.innerWidth() / 6
            thisRangeSlider.$element.css('left', elViewPosition + '%')
        }

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
