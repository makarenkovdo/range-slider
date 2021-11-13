import Runner from '../Runner';

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
  this: Runner,
  stepPosition: number,
  instance: number,
): void {
  this.positions[instance] = stepPosition;
  this.activeInstance = instance;
};

//  prettier-ignore
// getting the percent of runnerWidth to fieldWidth
// const calculatePreperatoryPosition = (
//   $field: JQuery<HTMLElement>, isVertical: boolean, fieldSize:number[], size:number[],
// ):number => {
//   const i = isVertical ? 1 : 0;
//   return (size[i] / ((fieldSize[i]) + 40)) * 50;
// };

type UpdatePositionToDOMArgs = { stepPosition: number; instance: number; positioning: string[] };

// prettier-ignore
const updatePositionToDOM = function updateRunnerPositionToDom(this:Runner,
  { stepPosition, instance, positioning }:UpdatePositionToDOMArgs):void {
  const { isVertical, fieldSize } = this.parent;
  const { size, $elements } = this;
  // const preperatoryPosition = calculatePreperatoryPosition(
  //   $field, isVertical, fieldSize, size,
  // );
  const switcher = isVertical ? 1 : 0;
  // const viewPosition = (stepPosition * (fieldSize[switcher])) / (fieldSize[switcher] + 40)+10;
  const viewPositionInPx = (stepPosition * (fieldSize[switcher] / 100));
  const getVerticalPosition = () => `${fieldSize[1] - viewPositionInPx + 5 - size[0] / 2}px`;
  const getHorizontalPosition = () => `${viewPositionInPx + 5 - size[0] / 2}px`;
  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
  $elements[instance].css(positioning[0], position);
};

export { setThisRunnerPosition, defineRunnerType, updatePositionToDOM };
