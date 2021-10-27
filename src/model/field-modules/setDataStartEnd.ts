import FieldModel from '../field-model';
import InitDataAndSizeArgs from './fieldModulesInterfaces';

const initValues = function initDataAndSize(
  this: FieldModel,
  { $element, minValue, maxValue }: InitDataAndSizeArgs,
): FieldModel {
  $element.attr('data-start', minValue);
  $element.attr('data-end', maxValue);
  $(document).ready(() => {
    this.size = [$element.css('width'), $element.css('height')];
  });
  return this;
};

export default initValues;
