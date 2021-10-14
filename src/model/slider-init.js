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

    onDrag() {
        $('.range-slider').on(
            'mousedown touchstart',
            '.range-number',
            function (event) {
                event.preventDefault()
                const $el = $(this)
                const $elParent = $(this).parents('.range-slider')
                const thisEnd = $elParent.data('end')
                console.log(event, $el, $elParent)
                $elParent.addClass('tap')
                $elParent.on('mousemove touchmove', function (event) {
                    event.preventDefault()
                    const cursorX = event.offsetX
                    const elPosition =
                        ((cursorX + 1) * 100) / $elParent[0].offsetWidth
                    const text = Math.floor(elPosition * (thisEnd / 100))
                    const elViewPosition = elPosition - $el.innerWidth() / 6
                    $el.css('left', elViewPosition + '%')
                    $el.find('span').text(text)
                })
            }
        )
        return this
    }
    onDrop() {
        $('.range-slider').on('mouseup touchend', function (event) {
            $(this).removeClass('tap')
            $(this).off('mousemove touchmove')
        })
    }
}
