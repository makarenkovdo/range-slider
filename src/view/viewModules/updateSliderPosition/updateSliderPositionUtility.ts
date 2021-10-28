import RunnerModel from '../../../model/RunnerModel';
import SliderView from '../../SliderView';

type DatasForUpdating = { stepPosition: number; instance: number; positioning: string[] };

const defineRunnerType = (isVertical: boolean, updatingRunner: RunnerModel): DatasForUpdating => {
  const positioning = [
    ['left', 'width'],
    ['top', 'height'],
  ];
  const { stepPosition, instance } = updatingRunner;
  const datasForUpdating = { stepPosition, instance, positioning: positioning[0] };
  // eslint-disable-next-line prefer-destructuring
  if (isVertical) datasForUpdating.positioning = positioning[1];
  return datasForUpdating;
};
type SetThisRunnerPositionArgs = {
  instance: number;
  stepPosition: number;
};
const setThisRunnerPosition = function setThisRunnerPositionToThis(
  this: SliderView,
  { instance, stepPosition }: SetThisRunnerPositionArgs,
): void {
  this.runnersPosition[instance] = stepPosition;
};

//  prettier-ignore
// getting the percent of runnerWidth to fieldWidth
const calculatePreperatoryPosition = ($field: JQuery<HTMLElement>, positioning: string[]):number => (parseInt($field.children('.runner').css(positioning[1]), 10)
    / parseInt($field.css(positioning[1]), 10))
    * 50;

type UpdatePositionToDOMArgs = { stepPosition: number; instance: number; positioning: string[] };

// prettier-ignore
const updatePositionToDOM = (
  { stepPosition, instance, positioning }:UpdatePositionToDOMArgs,
  isVertical:boolean, $field:JQuery<HTMLElement>,
):void => {
  const preperatoryPosition = calculatePreperatoryPosition($field, positioning);
  const getVerticalPosition = () => `${100 - stepPosition - preperatoryPosition}%`;
  const getHorizontalPosition = () => `${stepPosition - preperatoryPosition}%`;
  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
  $field.find(`.instance-${instance}`).css(positioning[0], position);
};

export { setThisRunnerPosition, defineRunnerType, updatePositionToDOM };
