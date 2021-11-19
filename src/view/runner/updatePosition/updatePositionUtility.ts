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

type UpdatePositionToDOMArgs = { stepPosition: number; instance: number; positioning: string[] };

const updatePositionToDOM = function updateRunnerPositionToDom(this:Runner,
  { stepPosition, instance, positioning }:UpdatePositionToDOMArgs):void {
  const { isVertical, fieldSize } = this.parent;
  const { size, $elements } = this;
  const switcher = isVertical ? 1 : 0;
  const viewPositionInPx = (stepPosition * (fieldSize[switcher] / 100));
  const getVerticalPosition = () => `${fieldSize[1] - viewPositionInPx + 5 - size[0] / 2}px`;
  const getHorizontalPosition = () => `${viewPositionInPx + 5 - size[0] / 2}px`;

  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
  $elements[instance].css(positioning[0], position);
};

export { setThisRunnerPosition, defineRunnerType, updatePositionToDOM };
