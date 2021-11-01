import { CheckValuesArgs } from '../presenterInterfaces';

const checkValues = (args: CheckValuesArgs): CheckValuesArgs => {
  let { minValue, maxValue, step } = args;
  const { runnerSize } = args;
  if (minValue > maxValue) {
    [minValue, maxValue] = [maxValue, minValue];
  } else if (minValue === maxValue) {
    minValue = 0;
    maxValue = 100;
  }

  if (step <= 0) {
    step = 1;
  }
  if (runnerSize[0] <= 0 || runnerSize[1] <= 0) {
    runnerSize[0] = 40;
    runnerSize[1] = 40;
  }
  return {
    minValue,
    maxValue,
    step,
    runnerSize,
  };
};

export default checkValues;
