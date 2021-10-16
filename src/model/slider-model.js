import jquery from 'jquery'

export default class SliderModel {
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
        this.isVertical = false
        this.isRange = false
        this.subscriber = subscriber
        this.isBarAdded = false
        this.stepPosition = 0
        this.stepValue = 0
    }
    init() {
        this.$parent = $(`#${this.id}`)
        this.$element = $(`#${this.id}`).children(
            '.range-number, .slider-toggler '
        )
        this.minValue = $(`#${this.id}`).attr('data-start')
        this.maxValue = $(`#${this.id}`).attr('data-end')
        this.class = $(`#${this.id}`).attr('class')
        this.isVertical = this.class === 'range-slider vertical'
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
                        (+this.minValue + 1)
                    this.stepPosition =
                        Math.trunc(this.positionInPercentage / this.step) *
                        this.step
                    this.stepValue =
                        Math.trunc(this.value / this.step) * this.step

                    this.notify(this)
                    // updatePosition([
                    //     this.$element,
                    //     this.positionInPercentage,
                    //     this.value,
                    // ])
                    // if (this.$element.attr('class') === 'range-number') {
                    //     updateText([this.$element, this.value])
                    // }
                })
            }
        )
    }

    onDrop() {
        $('.range-slider, .vertical-range-slider').on(
            'mouseup touchend',
            function (event) {
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
            this.stepPosition =
                Math.trunc(this.positionInPercentage / this.step) * this.step
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
