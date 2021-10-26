import FieldModel from '../field-model';

const setMinMax = function setMinimalMaximun(
  this: FieldModel,
  args: ['minValue' | 'maxValue', number],
): FieldModel {
  const [minOrMax, value] = args;
  if (value !== undefined) {
    this[minOrMax] = value;
  }
  return this;
};

export default setMinMax;
