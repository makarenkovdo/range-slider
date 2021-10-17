import jquery from 'jquery'

export default class FieldModel {
    constructor(id, subscriber) {
        this.$element = ''
        this.$parent = ''
        this.class = ''
        this.id = id
        this.positionInPercentage = 0
        this.value = 0
        this.minValue = 0
        this.maxValue = 100
        this.step = 1
        this.stepSignAfterComma = 0
        this.isVertical = false
        this.isRange = false
        this.subscriber = subscriber
        this.isBarAdded = false
        this.stepPosition = 0
        this.stepValue = 0
        this.range = []
    }
    init() {
        console.log(this.step)
        this.$parent = $(`#${this.id}`)
        this.$element = $(`#${this.id}`).children(
            '.range-number, .slider-toggler '
        )
        this.minValue = $(`#${this.id}`).attr('data-start')
        this.maxValue = $(`#${this.id}`).attr('data-end')
        this.class = $(`#${this.id}`).attr('class')
        this.isVertical = this.class === 'range-slider vertical'
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
        console.log('SINGNEN!!!', this.stepSignAfterComma)
    }
    notify() {
        this.subscriber.recieve(this)
    }
    setMaxValue(number) {
        $(`#${this.id}`).attr('data-end', number)
        return this
    }
    setMinValue(number) {
        $(`#${this.id}`).attr('data-start', number)
        return this
    }
    setStep(step) {
        this.step = step
        if (this.step < 1) {
            console.log('INIT IF~!!!')
            this.defineSignAfterComma()
        }
    }

    onDrag(updatePosition, updateText) {
        $(`#${this.id}`).on(
            'mousedown touchstart',
            '.slider-toggler',
            (event) => {
                event.preventDefault()
                this.$parent.addClass('tap')
                this.$parent.on('mousemove touchmove', (event) => {
                    event.preventDefault()
                    const cursorX = event.offsetX
                    const cursorY = event.offsetY
                    if (this.isVertical) {
                        this.positionInPercentage =
                            ((this.$parent[0].offsetHeight - (cursorY + 1)) *
                                100) /
                            this.$parent[0].offsetHeight
                    } else {
                        this.positionInPercentage =
                            ((cursorX + 1) * 100) / this.$parent[0].offsetWidth
                    }
                    this.value =
                        this.positionInPercentage *
                            ((this.maxValue - this.minValue) / 100) +
                        +this.minValue
                    this.stepPosition = (
                        Math.trunc(this.positionInPercentage / this.step) *
                        this.step
                    ).toFixed(this.stepSignAfterComma)
                    this.stepValue = (
                        Math.trunc(this.value / this.step) * this.step
                    ).toFixed(this.stepSignAfterComma)

                    this.notify(this)
                })
            }
        )
    }

    onDrop() {
        $('.range-slider, .vertical-range-slider').on(
            'mouseup touchend mouseleave',
            function (event) {
                event.preventDefault()
                event.stopPropagation()
                $(this).removeClass('tap')
                $(this).off('mousemove touchmove')
            }
        )
    }
    onClick() {
        $(`#${this.id}`).on('click', (event) => {
            event.preventDefault()
            const cursorX = event.offsetX
            const cursorY = event.offsetY
            if (this.isVertical) {
                this.positionInPercentage =
                    ((this.$parent[0].offsetHeight - (cursorY + 1)) * 100) /
                    this.$parent[0].offsetHeight
            } else {
                this.positionInPercentage =
                    ((cursorX + 1) * 100) / this.$parent[0].offsetWidth + 1
            }
            this.value =
                this.positionInPercentage *
                    ((this.maxValue - this.minValue) / 100) +
                +this.minValue
            this.stepPosition = (
                (this.positionInPercentage / this.step) *
                this.step
            ).toFixed(this.step)
            this.stepValue = Math.trunc(this.value / this.step) * this.step
            console.log(
                this.positionInPercentage,
                this.stepPosition,
                this.value,
                this.stepValue
            )
            this.notify(this)
        })
    }
}
