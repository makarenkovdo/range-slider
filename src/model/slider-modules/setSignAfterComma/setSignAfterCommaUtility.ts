import { Slider } from '../../modelInterfaces';
import SliderModel from '../../slider-model';

const calcSignAfterComma = ({ step }: Slider): number => {
  if (step.toString().includes('.')) {
    return step
      .toString()
      .split('.')
      .pop().length;
  }
  return 0;
};

const setThisSign = function setThisSignQuantityAfterComma(
  this: SliderModel,
  stepSignAfterComma: number,
): void {
  this.stepSignAfterComma = stepSignAfterComma;
};

export { calcSignAfterComma, setThisSign };
