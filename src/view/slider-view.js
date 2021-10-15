import './../index.scss'
import jquery from 'jquery'
import SliderModel from '../model/slider-model'

class SliderView extends SliderModel {
    addSliderButton(id) {
        $(`#${id}`).append('<span class="slider-toggler"></span>')
    }
    addRangeNumber(id) {
        // $(`#${id}`).find('.slider-toggler').remove()
        $(`#${id}`).append('<span class="range-number"><span>0</span></span>')
    }
    addBar(id) {
        $(`#${id}`).append(`<div class="slider-bar"></div>`)
    }
    updateBar() {
        if (this.isVertical) {
            console.log('INSIDE VERTICAL')
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('height', `${this.positionInPercentage}%`)
                .css(`top`, `${100 - this.positionInPercentage}%`)
        } else {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('width', `${this.positionInPercentage}%`)
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
        this.$element.find('span').text(Math.trunc(this.value))
    }
}

export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
