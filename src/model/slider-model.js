import jquery from 'jquery'

export default class SliderModel {
    constructor(id, isVertical = false, rangeQuantity = 1) {
        this.class = ''
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
    init() {
        console.log(this)
        this.$element = $(`#${this.id}`)
        this.minValue = $(`#${this.id}`).attr('data-start')
        this.maxValue = $(`#${this.id}`).attr('data-end')
        this.class = $(`#${this.id}`).attr('class')
        this.isVertical = this.class === 'vertical-range-slider'
        // this.$parent = $(event.currentTarget).parents(
        //     '.range-slider, .vertical-range-slider'
        // )
        return [
            this.$element,
            this.minValue,
            this.maxValue,
            this.class,
            this.isVertical,
        ]
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

        $('.range-slider, .vertical-range-slider').on(
            'mousedown touchstart',
            '.range-number, .slider-toggler',
            (event) => {
                event.preventDefault()
                this.$element = $(event.currentTarget)
                console.log(this.$element)
                this.$parent = $(event.currentTarget).parents(
                    '.range-slider, .vertical-range-slider'
                )
                console.log(this.$parent)

                this.minValue = this.$parent.data('start')
                this.maxValue = this.$parent.data('end')
                this.$parent.addClass('tap')
                this.$parent.on('mousemove touchmove', (event) => {
                    event.preventDefault()
                    const cursorX = event.offsetX
                    const cursorY = event.offsetY
                    console.log(cursorY)
                    if (
                        this.$parent.attr('class') ===
                        'vertical-range-slider tap'
                    ) {
                        console.log('VERTICAL!!')
                        this.positionInPercentage =
                            ((this.$parent[0].offsetHeight - cursorY + 1) *
                                100) /
                            this.$parent[0].offsetHeight
                    } else {
                        this.positionInPercentage =
                            ((cursorX + 1) * 100) / this.$parent[0].offsetWidth
                    }
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
        $('.range-slider, .vertical-range-slider').on(
            'mouseup touchend',
            function (event) {
                $(this).removeClass('tap')
                $(this).off('mousemove touchmove')
            }
        )
    }
}
