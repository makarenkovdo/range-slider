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
        //adding first and second slider (for range)
        const firstLeftStyle = 20
        const secondLeftStyle = 50
        $(`#${id}`).append(
            `<span class="slider instance-${i}" style="left:${
                firstLeftStyle + secondLeftStyle * i
            }%"></span>`
        )
    }
    correctSliderPosition(id) {
        //shift on half heght/width of slider
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
    // addRangeBar() {
    //     $(`#${this.id}`).append(`<div class="slider-bar"></div>`)
    // }
    updateBar(slider) {
        if (this.isVertical) {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('height', `${slider.stepPosition}%`)
                .css(`top`, `${100 - slider.stepPosition}%`)
        } else {
            $(`#${this.id}`)
                .children('.slider-bar')
                .css('width', `${slider.stepPosition}%`)
        }
    }
    updateRangeBar(controller) {
        console.log('UPD', controller, this)
        if (this.isVertical) {
            // $(`#${this.id}`)
            //     .children('.slider-bar')
            //     .css('height', `${that.stepPosition}%`)
            //     .css(`top`, `${100 - that.stepPosition}%`)
        } else {
            $(document).ready(() => {
                console.log(
                    'NEWEWEW',
                    $(`#${this.id}`).children('.instance-1').css('left')
                )
                let barWidth =
                    parseInt(
                        $(`#${this.id}`).children('.instance-1').css('left')
                    ) -
                    parseInt(
                        $(`#${this.id}`).children('.instance-0').css('left')
                    ) +
                    'px'
                console.log(barWidth)
                $(`#${this.id}`).children('.slider-bar').css('width', barWidth)
                $(`#${this.id}`)
                    .children('.slider-bar')
                    .css(
                        'left',
                        $(`#${this.id}`).children('.instance-0').css('left')
                    )
            })
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
