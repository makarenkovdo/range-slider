import './../index.scss'
import jquery from 'jquery'

export default class SliderView {
    constructor(id) {
        this.$id = $(`#${id}`)
        this.$element = ''
        this.$parent = '' //todo: equal to this.$id
        this.isVertical = false
        this.stepSignAfterComma = 0
        this.corrector = 0
    }
    initValues(controller, i) {
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
    addSlider(id, i, isVert, minMax) {
        let positioning = 'left'
        let index = i
        if (this.isVertical) {
            positioning = 'top'
            if (index === 0) index = 1
            else index = 0
        }
        this.$id.append(
            `<span class="slider instance-${i}" style="${positioning}:${minMax[index]}%"></span>`
        )
    }
    correctSliderPosition(id) {
        //shift on half heght/width of slider
        // $(document).ready(() => {
        //     if (this.isVertical) {
        //         $(`#${id}`)
        //             .find('.slider')
        //             .css(
        //                 'top',
        //                 parseInt($(`#${id}`).css('height')) -
        //                     parseInt($('.slider').css('height')) +
        //                     'px'
        //             )
        //     }
        // })
    }
    addTipNumber(id, i, isVert, minMax) {
        console.log('????', this)
        let positioning = 'left'
        let index = i
        if (this.isVertical) {
            positioning = 'top'
            if (index === 0) index = 1
            else index = 0
        }
        console.log(positioning)
        this.$id.append(
            `<span class='tip-number instance-${i}' style="${positioning}:${minMax[index]}%"><span>0</span></span>`
        )
        this.updateTextNumber(minMax[index], index) //todo update with REAL minmax
    }
    addBar() {
        console.log(this)
        this.$id.append(`<div class="slider-bar"></div>`)
    }
    updateBar(slider) {
        if (this.isVertical) {
            this.$id
                .children('.slider-bar')
                .css('height', `${slider.stepPosition}%`)
                .css(`top`, `${100 - slider.stepPosition}%`)
        } else {
            this.$id
                .children('.slider-bar')
                .css('width', `${slider.stepPosition}%`)
        }
    }
    updateRangeBar(controller) {
        $(document).ready(() => {
            this.isVertical
                ? this.updateRangeBarHelper(1)
                : this.updateRangeBarHelper(0)
        })
    }
    updateRangeBarHelper(index) {
        const vertIndex = 0
        const positionSwitcher = [
            ['left', 'width'],
            ['top', 'height'],
        ]
        /*barPosesArray = [[instance0-left,instance1-left],[instance0-top,instance1-top]]
        for horizontal and vertical sliders accordingly*/
        const barPosesArray = positionSwitcher.map((v1, i1, arr) =>
            arr.map((v2, i2) =>
                parseInt(this.$id.children(`.instance-${i2}`).css(`${v1[0]}`))
            )
        )
        console.log(barPosesArray[1])
        //barSize = [horizontalSliderWidth,verticalSliderHeight]
        let barSize = barPosesArray.map((v) => Math.abs(v[1] - v[0]))

        //helpVariable for rotation left/top value
        let helpVariable = [barPosesArray[index][index], barSize[index]]

        positionSwitcher[index].forEach(
            (v, i) => {
                this.$id.children('.slider-bar').css(
                    `${v}`,
                    helpVariable[i] + (this.$element.width() / 2) * !i
                    //shift on half a width WHEN it's a LEFT(TOP) position of instance-0
                )
            }
            //left&width OR top&height depending on index
        )
    }
    updatePosition(updatingSlider) {
        let positioning = [
            ['left', 'width'],
            ['top', 'height'],
        ]
        this.isVertical
            ? this.updatePositionHelper(updatingSlider, positioning[1])
            : this.updatePositionHelper(updatingSlider, positioning[0])
    }
    updatePositionHelper(updatingSlider, positioning) {
        const preperatoryPosition =
            (parseInt(this.$element.css(positioning[1])) /
                parseInt(this.$parent.css(positioning[1]))) *
            50
        const position = this.isVertical
            ? this.getVerticalPosition(updatingSlider, preperatoryPosition)
            : this.getHorizontalPosition(updatingSlider, preperatoryPosition)

        this.$parent
            .find(`.instance-${updatingSlider.instance}`)
            .css(positioning[0], position)
    }
    getVerticalPosition(updatingSlider, preperatoryPosition) {
        return 100 - updatingSlider.stepPosition - preperatoryPosition + '%'
    }
    getHorizontalPosition(updatingSlider, preperatoryPosition) {
        return (
            updatingSlider.stepPosition -
            preperatoryPosition -
            preperatoryPosition * updatingSlider.instance +
            '%'
        )
    }
    // updateTipPosition(direction) {
    //     this.$parent.find('.tip-number .instance-1').css(
    //         direction,
    //         this.$element.css(direction)
    //         // parseInt(this.$element.css('width')) / 2
    //     )
    // }
    updateTextNumber(stepValue, instance) {
        this.$parent.find(`.instance-${instance} span`).text(`${stepValue}`)
    }
}
