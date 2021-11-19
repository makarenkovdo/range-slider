import Panel from './Panel';

const updateRunnerInput = function updateRunnersValueInputs(
  this:Panel,
  stepValue:number,
  instance:number,
):void {
  const { $runner1ValueInput, $runner0ValueInput } = this;

  if (instance) {
    $runner1ValueInput.value = `${stepValue}`;
    this.runnersPosition[1] = stepValue;
  } else {
    $runner0ValueInput.value = `${stepValue}`;
    this.runnersPosition[0] = stepValue;
  }
};

export default updateRunnerInput;
