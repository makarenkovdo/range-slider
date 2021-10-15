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
        let direction = 'width'
        let thickness = 'height'
        $(`#${id}`).append(
            `<div class="slider-bar" style='background: red'></div>`
        )
        console.log('AFSFASF', this)
    }
    updateBar() {
        console.log('updateBar', this)
        let direction = 'width'
        let thickness = 'height'
        if (this.isVertical) {
            console.log('INSIDE VERTICAL')
            direction = 'height'
            thickness = 'width'
            $(`#${this.id}`)
                .children('.slider-bar')
                .css(`${direction}`, `${100 - this.positionInPercentage}%`)
        } else {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css(`${direction}`, `${this.positionInPercentage}%`)
                .css(`${thickness}`, `${20}px`)
        }
    }
    updatePosition(that) {
        const thisRangeSlider = that.rangeSlider
        let elViewPosition = 0
        if (thisRangeSlider.isVertical) {
            elViewPosition = 100 - thisRangeSlider.positionInPercentage

            thisRangeSlider.$element.css('top', elViewPosition + '%')
        } else {
            elViewPosition = thisRangeSlider.positionInPercentage
            thisRangeSlider.$element.css('left', elViewPosition + '%')
            //TODO -rangeNumber.width/2
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
