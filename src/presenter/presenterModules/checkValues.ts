import { CheckValuesArgs, PresenterBuildParams } from '../presenterInterfaces';

const checkValues = function checkInitialValues(
  params: PresenterBuildParams,
): PresenterBuildParams {
  let {
    minValue = 0,
    maxValue = 100,
    step = 1,
    fieldThickness = 6,
  } = params;

  const {
    runnerSize = [40, 40],
    shouldAddTip = false,
    shouldAddBar = false,
    shouldAddScale = false,
    isRange = false,
    isTestMode = false,
    orientation = 'horizontal',
    hasInputPanel = false,
    runnersInstantPosition = [0, 100],
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

  if (runnersInstantPosition[0] < minValue
    || runnersInstantPosition[0] > runnersInstantPosition[1]) {
    runnersInstantPosition[0] = minValue;
  }
  if (runnersInstantPosition[1] > maxValue) {
    runnersInstantPosition[1] = maxValue;
  }

  const checkedParams = {
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
    hasInputPanel,
  };
  return checkedParams;
};

export default checkValues;
