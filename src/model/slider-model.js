import jquery from 'jquery'

export default class SliderModel {
    constructor(id, isVertical = false, rangeQuantity = 1) {
        this.id = id
        this.positionInPercentage = 0
        this.value = ''
        this.id = id
        this.$element = ''
        this.$parent = ''
        this.array = []
        this.minValue = 0
        this.maxValue = 100
        this.isVertical = isVertical
        this.rangeQuantity = rangeQuantity
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
        const that = this

        $('.range-slider').on(
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
                    this.positionInPercentage =
                        ((cursorX + 1) * 100) / this.$parent[0].offsetWidth
                    this.value = Math.floor(
                        this.positionInPercentage *
                            ((this.maxValue - this.minValue) / 100) +
                            this.minValue
                    )
                    updatePosition([
                        this.$element,
                        this.positionInPercentage,
                        this.value,
                    ])
                    if (this.$element.attr('class') === 'range-number') {
                        updateText([this.$element, this.value])
                    }
                })
            }
        )
    }

    onDrop() {
        $('.range-slider').on('mouseup touchend', function (event) {
            $(this).removeClass('tap')
            $(this).off('mousemove touchmove')
        })
    }
}
