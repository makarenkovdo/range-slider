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
                .css('height', `${this.stepPosition}%`)
                .css(`top`, `${100 - this.stepPosition}%`)
        } else {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('width', `${this.stepPosition}%`)
        }
    }
    updatePosition(that) {
        if (this.isVertical) {
            this.$element.css('top', 100 - this.stepPosition + '%')
        } else {
            this.$element.css('left', `${this.stepPosition}` + '%')
            //TODO -rangeNumber.width/2
        }

        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(numbersArray) {
        this.$element.find('span').text(`${this.stepValue}`)
    }
}

export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
