import jquery from 'jquery'

export default class SliderModel {
    constructor(id, instance, subscriber) {
        this.id = id
        this.instance = instance
        this.$element = ''
        this.class = ''
        this.positionInPercentage = 0
        this.value = 0
        this.step = 1
        this.stepSignAfterComma = 0
        this.stepPosition = 0
        this.stepValue = 0
        this.subscriber = subscriber
    }
    init(min, max) {
        this.$parent = $(`#${this.id}`)
        this.$element = $(`#${this.id}`).children('.slider ')
        this.class = $(`#${this.id}`).attr('class')
        if (this.instance === 0) {
            this.stepPosition = min
            this.stepValue = min
        } else {
            this.stepPosition = max
            this.stepValue = max
        }
    }

    //for small 'steps' we need to define sign quantity after comma
    defineSignAfterComma() {
        ;((step) => {
            step.toString().includes('.')
                ? (this.stepSignAfterComma = step
                      .toString()
                      .split('.')
                      .pop().length)
                : (this.stepSignAfterComma = 0)
        })(this.step)
    }
    notify() {
        this.subscriber.recieve(this)
    }
    setStep(step) {
        this.step = step
        if (this.step < 1) {
            this.defineSignAfterComma()
        }
    }

    onDrag(field, slider, hasRange) {
        console.log(hasRange)
        $(`#${this.id}`).on(
            'mousedown touchstart',
            `.instance-${this.instance}`,
            (event) => {
                event.preventDefault()
                event.stopPropagation()
                field.$element.addClass('tap')
                field.$element.on('mousemove touchmove', (event) => {
                    event.preventDefault()
                    this.measurePosition(event, field, slider, hasRange)
                })
            }
        )
    }
    measurePosition(event, field, slider, hasRange) {
        const cursorX = event.offsetX
        const cursorY = event.offsetY
        if (field.isVertical) {
            this.positionInPercentage =
                ((field.$element[0].offsetHeight - (cursorY + 1)) * 100) /
                field.$element[0].offsetHeight
        } else {
            this.positionInPercentage =
                ((cursorX + 1) * 100) / this.$parent[0].offsetWidth
        }
        this.value =
            this.positionInPercentage *
                ((field.maxValue - field.minValue) / 100) +
            +field.minValue
        const stepPosition = (
            Math.trunc(this.positionInPercentage / this.step) * this.step
        ).toFixed(this.stepSignAfterComma)
        const stepValue = (
            Math.trunc(this.value / this.step) * this.step
        ).toFixed(this.stepSignAfterComma)
        console.log(hasRange)
        if (hasRange) {
            this.checkCollision(stepPosition, stepValue, slider)
        } else [this.stepPosition, this.stepValue] = [stepPosition, stepValue]

        this.notify.call(this)

        // if (slider[1].stepPosition < slider[0].stepPosition) {
        //     console.log('???')
        //     slider[1].stepPosition = slider[0].stepPosition
        //     slider[1].stepValue = slider[0].stepValue
        // }
    }
    checkCollision(stepPosition, stepValue, slider) {
        if (
            (!this.isVertical &&
                this.instance === 0 &&
                stepPosition - slider[1].stepPosition >= this.step) ||
            (this.isVertical &&
                this.instance === 0 &&
                stepPosition - slider[1].stepPosition <= this.step)
        ) {
            slider[0].stepPosition = +slider[1].stepPosition - this.step
            slider[0].stepValue = +slider[1].stepValue - this.step
        } else if (
            (!this.isVertical &&
                this.instance === 1 &&
                stepPosition - slider[0].stepPosition <= this.step) ||
            (this.isVertical &&
                this.instance === 0 &&
                stepPosition - slider[0].stepPosition >= this.step)
        ) {
            slider[1].stepPosition = +slider[0].stepPosition + this.step
            slider[1].stepValue = +slider[0].stepValue + this.step
        } else {
            this.stepPosition = stepPosition
            this.stepValue = stepValue
        }
    }
    checkBorders(stepPosition, stepValue, slider) {
        if (
            (!this.isVertical &&
                this.instance === 0 &&
                stepPosition - slider[1].stepPosition >= this.step) ||
            (this.isVertical &&
                this.instance === 0 &&
                stepPosition - slider[1].stepPosition <= this.step)
        ) {
            slider[0].stepPosition = +slider[1].stepPosition - this.step
            slider[0].stepValue = +slider[1].stepValue - this.step
        } else if (
            (!this.isVertical &&
                this.instance === 1 &&
                stepPosition - slider[0].stepPosition <= this.step) ||
            (this.isVertical &&
                this.instance === 0 &&
                stepPosition - slider[0].stepPosition >= this.step)
        ) {
            slider[1].stepPosition = +slider[0].stepPosition + this.step
            slider[1].stepValue = +slider[0].stepValue + this.step
        } else {
            this.stepPosition = stepPosition
            this.stepValue = stepValue
        }
        this.notify.call(this)
    }

    onDrop() {
        $('.range-slider').on('mouseup touchend', function (event) {
            event.preventDefault()
            event.stopPropagation()
            $('.range-slider').removeClass('tap')
            $('.range-slider').off('mousemove touchmove')
        })
        $('body').on('mouseup touchend', function (event) {
            event.preventDefault()
            event.stopPropagation()
            $('.range-slider').removeClass('tap')
            $('.range-slider').off('mousemove touchmove')
        })
    }
}
