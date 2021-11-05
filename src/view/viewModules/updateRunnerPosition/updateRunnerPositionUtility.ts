import SliderView from '../../SliderView';

type DatasForUpdating = { stepPosition: number; instance: number; positioning: string[] };

const defineRunnerType = (
  isVertical: boolean,
  stepPosition: number,
  instance: number,
): DatasForUpdating => {
  const positioning = [
    ['left', 'width'],
    ['top', 'height'],
  ];
  const datasForUpdating = { stepPosition, instance, positioning: positioning[0] };
  // eslint-disable-next-line prefer-destructuring
  if (isVertical) datasForUpdating.positioning = positioning[1];
  return datasForUpdating;
};

const setThisRunnerPosition = function setThisRunnerPositionToThis(
  this: SliderView,
  stepPosition: number,
  instance: number,
): void {
  this.runnersPosition[instance] = stepPosition;
  this.activeInstance = instance;
};

//  prettier-ignore
// getting the percent of runnerWidth to fieldWidth
// const calculatePreperatoryPosition = (
//   $field: JQuery<HTMLElement>, isVertical: boolean, fieldSize:number[], runnerSize:number[],
// ):number => {
//   const i = isVertical ? 1 : 0;
//   return (runnerSize[i] / ((fieldSize[i]) + 40)) * 50;
// };

type UpdatePositionToDOMArgs = { stepPosition: number; instance: number; positioning: string[] };

// prettier-ignore
const updatePositionToDOM = function updateRunnerPositionToDom(this:SliderView,
  { stepPosition, instance, positioning }:UpdatePositionToDOMArgs):void {
  const {
    isVertical, $field, fieldSize, runnerSize,
  } = this;

  // const preperatoryPosition = calculatePreperatoryPosition(
  //   $field, isVertical, fieldSize, runnerSize,
  // );
  const viewPosition = (stepPosition * (fieldSize[0])) / (fieldSize[0] + 40);
  const getVerticalPosition = () => `${100 - viewPosition}%`;
  const getHorizontalPosition = () => `${viewPosition}%`;
  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
  $field.find(`.js-instance-${instance}`).css(positioning[0], position);
};

export { setThisRunnerPosition, defineRunnerType, updatePositionToDOM };
