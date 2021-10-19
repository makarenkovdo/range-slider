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
        // this.stepPosition = 0
        // this.stepValue = 0
        this.range = []
    }
    init() {
        this.$element = $(`#${this.id}`) //todo: element is id!!! find it and clean garbage
        this.class = $(`#${this.id}`).attr('class')
        this.isVertical = this.class === 'range-slider vertical'
        $(`#${this.id}`).attr('data-end', this.minValue)
        $(`#${this.id}`).attr('data-start', this.maxValue)
        return this
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
    setMaxValue(value) {
        this.setMinMax(['maxValue', 'end', value])
        return this
    }
    setMinValue(value) {
        this.setMinMax(['minValue', 'start', value])
        return this
    }
    setMinMax(args) {
        const [minOrMax, dataSuffix, value] = args
        if (value !== NaN && value !== null && value !== undefined) {
            this[minOrMax] = value
        }
        $(`#${this.id}`).attr(`data-${dataSuffix}`, this[minOrMax])
    }

    onClick() {
        // $(`#${this.id}`).on('click', (event) => {
        //     const nearest = this.field.defineNearestSlider(event)
        //     this.slider[nearest].measurePosition(event, this.field)
        // })
    }
    defineNearestSlider(event) {
        const cursorXY = [event.offsetX, event.offsetY]
        let positioning = 'left'
        let xySwitcher = 0
        if (this.isVertical) {
            positioning = 'top'
            xySwitcher = 1
        }
        const slidersPosition = [0, 1].map((v) =>
            parseInt(
                $(`#${this.id}`)
                    .children(`.slider.instance-${v}`)
                    .css(positioning)
            )
        )
        const nearest =
            Math.abs(cursorXY[xySwitcher] - slidersPosition[0]) -
                Math.abs(cursorXY[xySwitcher] - slidersPosition[1]) <
            0
                ? 0
                : 1

        return nearest
    }
}
