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
        console.log(this.$parent, this.$element)
        console.log(this.corrector)
        console.log('this.$element.css', this.$element)
        console.log('this.$element.css(width))', this.$element.css('width'))
    }
    addSlider(id) {
        $(`#${id}`).append('<span class="slider"></span>')
    }
    addRangeNumber(id) {
        $(`#${this.id}`).append(
            '<span class="range-number"><span>0</span></span>'
        )
    }
    addBar(id) {
        $(`#${id}`).append(`<div class="slider-bar"></div>`)
    }
    updateBar(that) {
        console.log('sdfsdf', that.stepPosition)
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
        console.log(this.corrector)

        if (this.isVertical) {
            this.$element.css(
                'top',
                100 - `${that.stepPosition}` - this.corrector + '%'
            )
        } else {
            this.$element.css(
                'left',
                `${that.stepPosition}` - this.corrector + '%'
                // middle of the elemnt
            )
        }

        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(that) {
        console.log('text', this.$parent)

        this.$parent.find('.range-number span').text(`${that.stepValue}`)
    }
}

// export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
