import { Slider } from '../../modelInterfaces';

const calcSignAfterComma = ({ step }: Slider): number => {
  if (step.toString().includes('.')) {
    return step
      .toString()
      .split('.')
      .pop().length;
  }
  return 0;
};

const setThisSign = function setThisSignQuantityAfterComma(stepSignAfterComma: number): void {
  this.stepSignAfterComma = stepSignAfterComma;
};

export { calcSignAfterComma, setThisSign };
