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
    addSlider(id, i) {
        $(`#${id}`).append(`<span class="slider instance-${i}"></span>`)
    }
    correctSliderPosition(id) {
        $(document).ready(() => {
            if (this.isVertical) {
                $(`#${id}`)
                    .find('.slider')
                    .css(
                        'top',
                        parseInt($(`#${id}`).css('height')) -
                            parseInt($('.slider').css('height')) +
                            'px'
                    )
            }
        })
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
        // if (this.isVertical) {
        //     $(`#${this.id}`)
        //         .children('.slider-bar')
        //         .css('height', `${that.stepPosition}%`)
        //         .css(`top`, `${100 - that.stepPosition}%`)
        // } else {
        //     $(`#${this.id}`)
        //         .children('.slider-bar')
        //         .css('width', `${that.stepPosition}%`)
        // }
    }
    updateRangeBar(that) {
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
            this.$parent
                .find(`.instance-${that.instance}`)
                .css(
                    'top',
                    100 -
                        `${that.stepPosition}` -
                        (parseInt(this.$element.css('height')) /
                            parseInt(this.$parent.css('height'))) *
                            50 +
                        '%'
                )
            this.$parent.find('.range-number').css(
                'top',
                this.$element.css('top')
                // parseInt(this.$element.css('width')) / 2
            )
        } else {
            console.log(that.instance)
            this.$parent
                .find(`.instance-${that.instance}`)
                .css(
                    'left',
                    `${that.stepPosition}` -
                        (parseInt(this.$element.css('width')) /
                            parseInt(this.$parent.css('width'))) *
                            50 +
                        '%'
                )
            this.$parent.find('.range-number').css(
                'left',
                this.$element.css('left')
                // parseInt(this.$element.css('width')) / 2
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
