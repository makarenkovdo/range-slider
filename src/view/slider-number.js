import './../index.scss'
import jquery from 'jquery'

export function addRangeNumber() {
    $('.range-slider').each(function (index, el) {
        $(this).append('<span class="range-number"><span>0</span></span>')
    })
}
