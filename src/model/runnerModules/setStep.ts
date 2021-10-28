import RunnerModel from '../RunnerModel';

const setStep = function setRunnerStep(this: RunnerModel, step: number): void {
  this.step = step;
};

export default setStep;
