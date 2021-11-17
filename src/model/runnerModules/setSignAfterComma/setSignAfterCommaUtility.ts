import RunnerModel from '../../RunnerModel';

const calcSignAfterComma = ({ step }: RunnerModel, minMax: number[]): number => {
  const minMaxSignAfterComma:number[] = [];
  if (step.toString().includes('.')) {
    minMaxSignAfterComma.push(step
      .toString()
      .split('.')
      .pop().length);
  } else minMaxSignAfterComma.push(0);
  if (minMax[0].toString().includes('.')) {
    minMaxSignAfterComma.push(minMax[0]
      .toString()
      .split('.')
      .pop().length);
  } else minMaxSignAfterComma.push(0);
  if (minMax[1].toString().includes('.')) {
    minMaxSignAfterComma.push(minMax[1]
      .toString()
      .split('.')
      .pop().length);
  } else minMaxSignAfterComma.push(0);
  return Math.max(minMaxSignAfterComma[0], minMaxSignAfterComma[1], minMaxSignAfterComma[2]);
};

const setThisSign = function setThisSignQuantityAfterComma(
  this: RunnerModel,
  stepSignAfterComma: number,
): void {
  this.stepSignAfterComma = stepSignAfterComma;
};

export { calcSignAfterComma, setThisSign };
