import FieldModel from '../FieldModel';

const setMinMax = function setMinimalMaximun(
  this: FieldModel,
  args: ['minValue' | 'maxValue', number],
): void {
  const [minOrMax, value] = args;
  if (value !== undefined) {
    this[minOrMax] = value;
  }
};

export default setMinMax;