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
        // $(`#${id}`).find('.slider-toggler').remove()
        $(`#${id}`).append('<span class="range-number"><span>0</span></span>')
    }
    addBar(id) {
        console.log('here')
        $(`#${id}`).append(
            '<div class="slider-bar" style="width:100%; height:20px; background: red"></div>'
        )
    }
    updatePosition(that) {
        const thisRangeSlider = that.rangeSlider
        console.log(thisRangeSlider)
        let elViewPosition = 0
        if (thisRangeSlider.isVertical) {
            elViewPosition = 100 - thisRangeSlider.positionInPercentage

            thisRangeSlider.$element.css('top', elViewPosition + '%')
        } else {
            elViewPosition = thisRangeSlider.positionInPercentage
            thisRangeSlider.$element.css('left', elViewPosition + '%')
            //TODO -rangeNumber.width/2
        }
        $(`#${thisRangeSlider.id}`)
            .children('.slider-bar')
            .css('width', `${elViewPosition}%`)

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
