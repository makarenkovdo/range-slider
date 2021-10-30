import FieldModel from '../FieldModel';

const setMinMax = function setMinimalMaximun(
  this: FieldModel,
  minValue: number,
  maxValue: number,
): void {
  this.minMax = [minValue, maxValue];
};

export default setMinMax;
