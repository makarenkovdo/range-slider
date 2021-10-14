import './../index.scss'
import jquery from 'jquery'

class SliderView {
    addRangeNumber() {
        $('.range-slider').each(function (index, el) {
            $(this).append('<span class="range-number"><span>0</span></span>')
        })
    }
    updatePosition(numbersArray) {
        const elViewPosition =
            numbersArray[1] - numbersArray[0].innerWidth() / 6
        numbersArray[0].css('left', elViewPosition + '%')
        numbersArray[0].find('span').text(numbersArray[2])
    }
}

export const sliderView = new SliderView()

// const elViewPosition = elPosition - $el.innerWidth() / 6
// $el.css('left', elViewPosition + '%')
//
