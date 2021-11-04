import SliderView from '../SliderView';

const setStep = function setRunnerStepInView(
  this: SliderView, step: number, stepSignAfterComma:number,
): void {
  this.step = step;
  this.stepSignAfterComma = stepSignAfterComma;
};

export default setStep;
