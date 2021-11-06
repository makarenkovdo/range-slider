import RunnerModel from '../RunnerModel';

const setStep = function setRunnerStep(this: RunnerModel, step: number, minMax: number[]): void {
  this.step = step;
  this.stepInPercent = 100 / ((minMax[1] - minMax[0]) / step);
};

export default setStep;
