const calcSignAfterComma = (step) => {
  if (step.toString().includes('.')) {
    return step
      .toString()
      .split('.')
      .pop().length;
  }
  return 0;
};

export default calcSignAfterComma;
