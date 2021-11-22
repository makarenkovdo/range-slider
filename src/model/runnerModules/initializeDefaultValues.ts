import RunnerModel from '../RunnerModel';

const initializeDefaultValues = function initializeDefaultPositionAndValue(
  this: RunnerModel,
  minMax: number[],
  runnersInstantPosition: number,
): void {
  this.defineSignAfterComma(minMax);
  this.stepInPercent = (this.step / (minMax[1] - minMax[0])) * 100;

  this.setValuesFromInputs.call(
    this,
    runnersInstantPosition,
    minMax,
  );
};

export default initializeDefaultValues;
