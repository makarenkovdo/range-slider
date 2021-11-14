import Panel from './Panel';

const updateRunnerInput = function updateRunnersValueInputs(
  this:Panel,
  stepValue:number,
  instance:number,
):void {
  const { $runner1ValueInput, $runner0ValueInput } = this;

  if (instance) $runner1ValueInput.value = `${stepValue}`;
  else $runner0ValueInput.value = `${stepValue}`;
};

export default updateRunnerInput;
