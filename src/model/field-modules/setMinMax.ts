const setMinMax = function setMinimalMaximunSize(args) {
  const [minOrMax, value] = args;
  if (!value.isNaN && value !== undefined) {
    this[minOrMax] = value;
  }
  return this;
};

export default setMinMax;
