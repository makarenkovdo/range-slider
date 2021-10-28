interface ControllerBuildParams {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
  isRange?: boolean;
  runnerSize?: number[];
}

export default ControllerBuildParams;
