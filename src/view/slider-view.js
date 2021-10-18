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
        console.log(controller.slider[i], i)
        this.$element = controller.slider[0].$element
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
    addRangeNumber(i) {
        $(`#${this.id}`).append(
            `<span class='range-number instance-${i}'><span>0</span></span>`
        )
    }
    addBar() {
        $(`#${this.id}`).append(`<div class="slider-bar"></div>`)
    }
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
        $(document).ready(() => {
            if (this.isVertical) {
                this.updateRangeBarHelper(1)
            } else {
                this.updateRangeBarHelper(0)
            }

            // positionSwitcher.forEach((v) =>
            //     $(`#${this.id}`)
            //         .children('.slider-bar')
            //         .css(`${v[0][i]}`, barWidthHeight[0])
            // )

            // positionSwitcher.forEach((v) =>
            //     $(`#${this.id}`)
            //         .children('.slider-bar')
            //         .css(`${v[0]}`, barPosesArray[i][0])
            // )

            // $(`#${this.id}`)
            //     .children('.slider-bar')
            //     .css('width', barWidthHeight[0])
            // $(`#${this.id}`)
            //     .children('.slider-bar')
            //     .css('left', barPosesArray[0][0])
        })
    }
    updateRangeBarHelper(index) {
        const positionSwitcher = [
            ['left', 'width'],
            ['top', 'height'],
        ]
        //barPosesArray - [[instance0-left,instance1-left],[instance0-top,instance1-top]]
        //for horizontal and vertical accordingly
        const barPosesArray = positionSwitcher.map((v1, i1, arr) =>
            arr.map((v2, i2) =>
                parseInt(
                    $(`#${this.id}`).children(`.instance-${i2}`).css(`${v1[0]}`)
                )
            )
        )
        //barWidthHeight - [horizontalSliderWidth,verticalSliderHeight]
        let barWidthHeight = barPosesArray.map((v) => v[1] - v[0])
        console.log(barWidthHeight)

        let helpVariable = [barPosesArray[index][0], barWidthHeight[index]]
        positionSwitcher[index].forEach(
            (v, i) => {
                $(`#${this.id}`)
                    .children('.slider-bar')
                    .css(`${v}`, helpVariable[i])
            }
            //сначала left, потом width
            //или top, затем height
        )
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
            this.$parent.find(`.range-number .instance-${that.instance}`).css(
                'left',
                this.$element.css('left')
                // parseInt(this.$element.css('width')) / 2
            )
        }

        // that.rangeSlider.$element.find('span').text(numbersArray[2])
    }
    updateTextNumber(that) {
        this.$parent
            .find(`.instance-${that.instance} span`)
            .text(`${that.stepValue}`)
    }
}

// export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
