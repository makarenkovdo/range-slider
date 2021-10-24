const calcSignAfterComma = (step) => {
  if (step.toString().includes('.')) {
    return step
      .toString()
      .split('.')
      .pop().length;
  }
  return 0;
};

const setThisSign = function setThisSignQuantityAfterComma(stepSignAfterComma) {
  this.stepSignAfterComma = stepSignAfterComma;
};

export { calcSignAfterComma, setThisSign };
