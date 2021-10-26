import FieldModel from '../field-model';
import InitDataStartEndArgs from './fieldModulesInterfaces';

const initDataStartEnd = ({ $element, minValue, maxValue }: InitDataStartEndArgs): FieldModel => {
  $element.attr('data-start', minValue);
  $element.attr('data-end', maxValue);

  return this;
};

export default initDataStartEnd;
