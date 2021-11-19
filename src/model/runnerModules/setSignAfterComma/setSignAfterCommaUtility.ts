import RunnerModel from '../../RunnerModel';

const calcSignAfterComma = ({ step }: RunnerModel, minMax: number[]): number => {
  const minMaxSignAfterComma:number[] = [];
  const separatedStep = step.toString().split('.');
  const separatedMin = minMax[0].toString().split('.');
  const separatedMax = minMax[1].toString().split('.');
  if (separatedStep[1]) {
    minMaxSignAfterComma.push(separatedStep.pop().length);
  } else minMaxSignAfterComma.push(0);
  if (separatedMin[1]) {
    minMaxSignAfterComma.push(separatedMin.pop().length);
  } else minMaxSignAfterComma.push(0);
  if (separatedMax[1]) {
    minMaxSignAfterComma.push(separatedMax.pop().length);
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
