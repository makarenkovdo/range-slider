import jquery from 'jquery'

export default class SliderModel {
    constructor(id, subscriber) {
        this.id = id
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
    init() {
        this.$parent = $(`#${this.id}`)
        this.$element = $(`#${this.id}`).children('.slider ')
        this.class = $(`#${this.id}`).attr('class')
    }
    defineSignAfterComma() {
        const f = (step) =>
            step.toString().includes('.')
                ? (this.stepSignAfterComma = step
                      .toString()
                      .split('.')
                      .pop().length)
                : (this.stepSignAfterComma = 0)
        f(this.step)
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

    onDrag(field) {
        $(`#${this.id}`).on(
            'mousedown touchstart',
            '.slider, .range-number',
            (event) => {
                event.preventDefault()
                field.$element.addClass('tap')
                this.measurePosition(field)
            }
        )
    }
    measurePosition(field) {
        console.log(field, this)

        field.$element.on('mousemove touchmove', (event) => {
            event.preventDefault()
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
            this.stepPosition = (
                Math.trunc(this.positionInPercentage / this.step) * this.step
            ).toFixed(this.stepSignAfterComma)
            this.stepValue = (
                Math.trunc(this.value / this.step) * this.step
            ).toFixed(this.stepSignAfterComma)
            this.notify.call(this)
        })
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
