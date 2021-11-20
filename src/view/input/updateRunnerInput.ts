import Input from './Input';

const updateRunnerInput = function updateRunnersValueInputs(
  this:Input,
  stepValue:number,
  instance:number,
):void {
  const { $element } = this;
  if ($element) $element.value = `${stepValue}`;
  this.parent.runner.positions[instance] = stepValue;
  // runnersPosition[instance]
};

export default updateRunnerInput;
