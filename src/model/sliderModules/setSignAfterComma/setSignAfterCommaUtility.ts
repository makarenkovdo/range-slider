import RunnerModel from '../../RunnerModel';

const calcSignAfterComma = ({ step }: RunnerModel): number => {
  if (step.toString().includes('.')) {
    return step
      .toString()
      .split('.')
      .pop().length;
  }
  return 0;
};

const setThisSign = function setThisSignQuantityAfterComma(
  this: RunnerModel,
  stepSignAfterComma: number,
): void {
  this.stepSignAfterComma = stepSignAfterComma;
};

export { calcSignAfterComma, setThisSign };
