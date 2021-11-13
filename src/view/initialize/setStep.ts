import SliderView from '../SliderView';

const setStep = function setRunnerStepInView(
  this: SliderView, step: number, stepSignAfterComma:number,
): void {
  this.runner.step = step;
  this.runner.stepSignAfterComma = stepSignAfterComma;
  this.lengthInStep = (this.minMax[1] - this.minMax[0]) / step;
};

export default setStep;
