import jquery from 'jquery'
import SliderModel from './slider-model'
import FieldModel from './field-model'

export default class SliderInputModel {
    constructor(id, subscriber) {
        this.slider = new SliderModel()
        this.field = new FieldModel(id, subscriber)
    }
}
