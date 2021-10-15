import jquery from 'jquery'

export default class SliderModel {
    constructor(id, subscriber) {
        this.class = ''
        this.positionInPercentage = 0
        this.value = ''
        this.id = id
        this.$element = ''
        this.$parent = ''
        this.array = []
        this.minValue = 0
        this.maxValue = 100
        this.isVertical = false
        this.rangeQuantity = 1
        this.subscriber = subscriber
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
        // return this
        // $element: this.$element,
        // $parent: this.$parent,
        // minValue: this.minValue,
        // maxValue: this.maxValue,
        // class: this.class,
        // isVertical: this.isVertical,
    }
    notify() {
        this.subscriber.recieve(this)
        // return this.subscriber.
    }
    setMaxValue(number) {
        $(`#${this.id}`).attr('data-end', number)
        return this
    }
    setMinValue(number) {
        $(`#${this.id}`).attr('data-start', number)
        return this
    }

    onDrag(updatePosition, updateText) {
        $(`#${this.id}`).on(
            'mousedown touchstart',
            '.range-number, .slider-toggler',
            (event) => {
                event.preventDefault()
                this.$element = $(event.currentTarget)
                this.$parent = $(event.currentTarget).parents('.range-slider')

                this.minValue = this.$parent.data('start')
                this.maxValue = this.$parent.data('end')
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
                    this.value = Math.floor(
                        this.positionInPercentage *
                            ((this.maxValue - this.minValue) / 100) +
                            this.minValue +
                            1
                    )
                    this.notify(this)
                    // updatePosition([
                    //     this.$element,
                    //     this.positionInPercentage,
                    //     this.value,
                    // ])
                    if (this.$element.attr('class') === 'range-number') {
                        updateText([this.$element, this.value])
                    }
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
    inform() {}
}
