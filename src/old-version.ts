import jquery from 'jquery'

jquery(document).ready(function ($) {
    $('.range-slider').each(function (index, el) {
        $(this).append('<span class="range-number"><span>0</span></span>')
    })
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
    $('.range-slider').on('mouseup touchend', function (event) {
        $(this).removeClass('tap')
        $(this).off('mousemove touchmove')
    })
})
