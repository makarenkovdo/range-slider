import jquery from 'jquery'

export default class SliderModel {
    constructor(id, maxValue = 100, isVertical = false, rangeQuantity = 1) {
        this.id = id
        this.$element = ''
        this.$parent = ''
        this.value = ''
        this.array = []
        this.maxValue = maxValue
        this.isVertical = isVertical
        this.rangeQuantity = rangeQuantity
    }
    init(addRangeNumber) {
        addRangeNumber()
    }
    setMaxValue(number) {
        console.log(this.id)
        $(`#${this.id}`).attr('data-end', number)
        return this
    }

    onDrag(updateView, updateValues) {
        const that = this

        $('.range-slider').on(
            'mousedown touchstart',
            '.range-number',
            (event) => {
                event.preventDefault()
                this.$element = $(event.currentTarget)
                this.$parent = $(event.currentTarget).parents('.range-slider')
                const thisEnd = this.$parent.data('end')
                this.$parent.addClass('tap')
                this.$parent.on('mousemove touchmove', (event) => {
                    event.preventDefault()
                    const cursorX = event.offsetX
                    const chosenPercentOfWidth =
                        ((cursorX + 1) * 100) / this.$parent[0].offsetWidth
                    const chosenNumber = Math.floor(
                        chosenPercentOfWidth * (thisEnd / 100)
                    )
                    updateView([
                        this.$element,
                        chosenPercentOfWidth,
                        chosenNumber,
                    ])
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
