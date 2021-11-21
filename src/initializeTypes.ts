import { Orientation } from './presenter/presenterInterfaces';

type BuildParamsBeforeChecking = {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
  shouldAddScale?: boolean;
  isRange?: boolean;
  runnerSize?: number[];
  fieldThickness?: number;
  orientation?: Orientation;
  runnersInstantPosition?: number[];
  hasInputPanel?: boolean;
  isTestMode?: boolean;
  onChange?: (params:BuildParamsBeforeChecking)=>void
};
type BuildParams = {
  minValue: number;
  maxValue: number;
  step: number;
  shouldAddTip: boolean;
  shouldAddBar: boolean;
  shouldAddScale: boolean;
  isRange: boolean;
  runnerSize: number[];
  fieldThickness: number;
  orientation: Orientation;
  runnersInstantPosition: number[];
  isTestMode?: boolean;
  onChange?: (params:BuildParamsBeforeChecking)=>void;
};

export { BuildParams, BuildParamsBeforeChecking };
