import SliderView from '../SliderView';

const setStep = function setRunnerStepInView(
  this: SliderView, step: number, stepSignAfterComma:number,
): void {
  this.step = step;
  this.stepSignAfterComma = stepSignAfterComma;
  this.lengthInStep = (this.minMax[1] - this.minMax[0]) / step;
  console.log(this.lengthInStep);
  
};

export default setStep;
