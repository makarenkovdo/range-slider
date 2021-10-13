import './index.scss'
import jquery from 'jquery'

jquery(document).ready(function ($) {
    $('.range-slider').each(function (i) {
        $(this).append('<span class="range-number"><span>0</span></span>')
    })
})
