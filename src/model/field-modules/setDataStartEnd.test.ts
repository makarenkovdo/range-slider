import FieldModel from '../field-model';
import InitDataAndSizeArgs from './fieldModulesInterfaces';

const initValues = function initDataAndSize(
  this: FieldModel,
  { $element, minValue, maxValue }: InitDataAndSizeArgs,
): void {
  $element.attr('data-start', minValue);
  $element.attr('data-end', maxValue);
  $(document).ready(() => {
    this.size = [$element.css('width'), $element.css('height')];
  });
};

export default initValues;
