import './../index.scss'
import jquery from 'jquery'

export default class SliderView {
    constructor(id) {
        this.id = id
        this.$element = ''
        this.$parent = ''
        this.isVertical = false
        this.stepSignAfterComma = 0
        this.corrector = 0
    }
    initValues(controller, i) {
        this.$element = controller.slider[i].$element
        this.$parent = controller.field.$element
        this.isVertical = controller.field.isVertical
        $(document).ready(() => {
            if (this.isVertical) {
                this.corrector =
                    (parseInt(this.$element.css('height')) /
                        parseInt(this.$parent.css('height'))) *
                    50
            } else
                this.corrector =
                    (parseInt(this.$element.css('width')) /
                        parseInt(this.$parent.css('width'))) *
                    50
        })
    }
    addSlider(id) {
        $(`#${id}`).append('<span class="slider"></span>')
    }
    addRangeNumber(id) {
        $(`#${this.id}`).append(
            '<span class="range-number"><span>0</span></span>'
        )
    }
    addBar() {
        $(`#${this.id}`).append(`<div class="slider-bar"></div>`)
    }
    updateBar(that) {
        if (this.isVertical) {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('height', `${that.stepPosition}%`)
                .css(`top`, `${100 - that.stepPosition}%`)
        } else {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('width', `${that.stepPosition}%`)
        }
    }
    updatePosition(that) {
        if (this.isVertical) {
            this.$element.css(
                'top',
                100 -
                    `${that.stepPosition}` -
                    (parseInt(this.$element.css('height')) /
                        parseInt(this.$parent.css('height'))) *
                        50 +
                    '%'
            )
        } else {
            this.$element.css(
                'left',
                `${that.stepPosition}` -
                    (parseInt(this.$element.css('width')) /
                        parseInt(this.$parent.css('width'))) *
                        50 +
                    '%'
                // middle of the elemnt
            )
        }

        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(that) {
        this.$parent.find('.range-number span').text(`${that.stepValue}`)
    }
}

// export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
