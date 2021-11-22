import { BuildParams, BuildParamsBeforeChecking } from '../../initializeTypes';

const checkValues = function checkInitialValues(
  params: BuildParamsBeforeChecking,
): BuildParams {
  let {
    minValue = 0,
    maxValue = 100,
    step = 1,
    fieldThickness = 6,
    runnersInstantPosition = [0, 100],
  } = params;

  const {
    runnerSize = [40, 40],
    shouldAddTip = false,
    shouldAddBar = false,
    shouldAddScale = false,
    isRange = false,
    isTestMode = false,
    orientation = 'horizontal',
  } = params;
  if (minValue > maxValue) {
    [minValue, maxValue] = [maxValue, minValue];
  } else if (minValue === maxValue) {
    minValue = 0;
    maxValue = 100;
  }

  if (step <= 0) {
    step = 1;
  }
  if (step > maxValue - minValue) {
    step = maxValue - minValue;
  }
  if (runnerSize[0] <= 6 || runnerSize[1] <= 6) {
    runnerSize[0] = 6;
    runnerSize[1] = 6;
  }
  if (runnerSize[0] > 50 || runnerSize[1] > 50) {
    runnerSize[0] = 50;
    runnerSize[1] = 50;
  }
  if (fieldThickness <= 0) {
    fieldThickness = 1;
  }
  if (fieldThickness >= 20) {
    fieldThickness = 20;
  }

  // eslint-disable-next-line arrow-body-style
  const ifPosition0Incorrect = ():boolean => {
    return runnersInstantPosition[0] < minValue
    || runnersInstantPosition[0] > maxValue;
  };
  // eslint-disable-next-line arrow-body-style
  const ifPosition1Incorrect = ():boolean => {
    return runnersInstantPosition[1] > maxValue || runnersInstantPosition[1] < minValue;
  };

  if (ifPosition0Incorrect()) {
    runnersInstantPosition[0] = minValue;
  }
  if (ifPosition1Incorrect()) {
    runnersInstantPosition[1] = maxValue;
  }
  if (isRange && runnersInstantPosition[0] > runnersInstantPosition[1]) {
    runnersInstantPosition = [runnersInstantPosition[1], runnersInstantPosition[0]];
  }

  const checkedParams:BuildParams = {
    minValue,
    maxValue,
    step,
    runnerSize,
    fieldThickness,
    runnersInstantPosition,
    shouldAddTip,
    shouldAddBar,
    shouldAddScale,
    isRange,
    isTestMode,
    orientation,
  };
  if (params.onChange) checkedParams.onChange = params.onChange;
  return checkedParams;
};

export default checkValues;
