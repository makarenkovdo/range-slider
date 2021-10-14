import jquery from 'jquery'

export default class RangeSlider {
    constructor(maxValue = 100, isVertical = false, rangeQuantity = 1) {
        this.maxValue = maxValue
        this.isVertical = isVertical
        this.rangeQuantity = rangeQuantity
    }
    init(addRangeNumber) {
        addRangeNumber()
    }

    onDrag(updateView) {
        $('.range-slider').on(
            'mousedown touchstart',
            '.range-number',
            function (event) {
                event.preventDefault()
                const $el = $(this)
                const $elParent = $(this).parents('.range-slider')
                const thisEnd = $elParent.data('end')
                console.log($el, $elParent)
                $elParent.addClass('tap')
                $elParent.on('mousemove touchmove', function (event) {
                    event.preventDefault()
                    const cursorX = event.offsetX
                    const chosenPercentOfWidth =
                        ((cursorX + 1) * 100) / $elParent[0].offsetWidth
                    const chosenNumber = Math.floor(
                        chosenPercentOfWidth * (thisEnd / 100)
                    )
                    updateView([$el, chosenPercentOfWidth, chosenNumber])
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
