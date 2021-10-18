import jquery from 'jquery'

export default class FieldModel {
    constructor(id, subscriber) {
        this.$element = ''
        // this.$parent = ''
        this.class = ''
        this.id = id
        this.minValue = 0
        this.maxValue = 100
        this.step = 1
        this.stepSignAfterComma = 0
        this.isVertical = false
        this.isRange = false
        this.subscriber = subscriber
        this.isBarAdded = false
        this.stepPosition = 0
        this.stepValue = 0
        this.range = []
    }
    init() {
        this.$element = $(`#${this.id}`)
        this.minValue = $(`#${this.id}`).attr('data-start')
        this.maxValue = $(`#${this.id}`).attr('data-end')
        this.class = $(`#${this.id}`).attr('class')
        this.isVertical = this.class === 'range-slider vertical'
    }
    defineSignAfterComma() {
        const f = (step) =>
            step.toString().includes('.')
                ? (this.stepSignAfterComma = step
                      .toString()
                      .split('.')
                      .pop().length)
                : (this.stepSignAfterComma = 0)
        f(this.step)
    }
    notify() {
        this.subscriber.recieve(this)
    }
    setMaxValue(number) {
        $(`#${this.id}`).attr('data-end', number)
        return this
    }
    setMinValue(number) {
        $(`#${this.id}`).attr('data-start', number)
        return this
    }

    onClick() {
        $(`#${this.id}`).on('click', (event) => {
            this.slider[0].measurePosition(event, this.field)
        })
    }
}
