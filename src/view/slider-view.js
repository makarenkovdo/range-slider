import './../index.scss'
import jquery from 'jquery'

export default class SliderView {
    constructor(id) {
        this.id = id
        this.$element = ''
        this.$parent = ''
        this.isVertical = false
        this.stepSignAfterComma = 0
        this.verticalCorrector = 0
        this.horizontalCorrector = 0
    }
    initValues(controller, i) {
        this.$element = controller.slider[i].$element
        this.$parent = controller.field.$element
        this.isVertical = controller.field.isVertical
        this.verticalCorrector =
            (parseInt(this.$element.css('height')) / //count 1 time and write to this
                parseInt(this.$parent.css('height'))) *
            50
        this.horizontalCorrector =
            (parseInt(this.$element.css('width')) /
                parseInt(this.$parent.css('width'))) *
            50
        console.log(this)
    }
    addSlider(id) {
        $(`#${id}`).append('<span class="slider-toggler first"></span>') //?????
    }
    addRangeNumber(id) {
        $(`#${id}`).append('<span class="range-number"><span>0</span></span>')
    }
    addBar(id) {
        $(`#${id}`).append(`<div class="slider-bar"></div>`)
    }
    updateBar() {
        if (this.isVertical) {
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
            this.$element.css(
                'top',
                100 - `${that.stepPosition}` - this.verticalCorrector + '%'
            )
        } else {
            console.log(that.stepPosition)
            this.$element.css(
                'left',
                `${that.stepPosition}` - this.horizontalCorrector + '%'
                // middle of the elemnt
            )
        }

        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(numbersArray) {
        this.$element.find('span').text(`${this.stepValue}`)
    }
}

// export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
