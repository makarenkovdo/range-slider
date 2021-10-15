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
        let elViewPosition = 0
        if (this.isVertical) {
            elViewPosition = 100 - this.positionInPercentage

            this.$element.css('top', elViewPosition + '%')
        } else {
            elViewPosition = this.positionInPercentage
            console.log(this.value)
            console.log(this.positionInPercentage)
            console.log((elViewPosition / this.step) * this.step)

            this.$element.css(
                'left',
                `${Math.floor(elViewPosition / this.step) * this.step}` + '%'
            )
            //TODO -rangeNumber.width/2
        }

        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(numbersArray) {
        this.$element
            .find('span')
            .text(`${Math.floor(this.value / this.step) * this.step}`)
    }
}

export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
