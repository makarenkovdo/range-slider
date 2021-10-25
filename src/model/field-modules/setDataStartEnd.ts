import FieldModel from '../field-model';

const initDataStartEnd = ({
  $element,
  minValue,
  maxValue,
}: {
  $element: JQuery<HTMLElement>;
  minValue: number;
  maxValue: number;
}): FieldModel => {
  $element.attr('data-start', minValue);
  $element.attr('data-end', maxValue);

  return this;
};

export default initDataStartEnd;
