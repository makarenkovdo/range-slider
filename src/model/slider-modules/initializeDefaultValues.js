const initializeDefaultValues = function initializeDefaultPositionAndValue(minMax) {
  const minMaxStepPosition = [0, 100];
  this.stepPosition = minMaxStepPosition[this.instance];
  this.stepValue = minMax[this.instance];
};

export default initializeDefaultValues;
