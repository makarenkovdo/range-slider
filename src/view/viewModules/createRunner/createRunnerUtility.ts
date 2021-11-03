import SliderView from '../../SliderView';
import { PreparedDataType } from '../createTipNumber/createTipNumberUtility';

const prepareRunnerArgs = (i: number, isVertical: boolean, runnerSize: number[],
  fieldSize: number[]): PreparedDataType => {
  let positioning = 'left';
  let minMax = 100 * i;
  let switcher = 0;

  if (isVertical) {
    positioning = 'top';
    minMax = 100 - minMax;
    switcher = 1;
  }
  const position:number = (minMax - ((runnerSize[switcher] / fieldSize[switcher]) * 50));
  return { i, positioning, position };
};

const addRunnerToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  runnerSize: number[],
): void => {
  console.log('runnerSize', runnerSize);

  const { i, positioning, position } = preparedData;

  $id.append(
    `<span data-testid="test-runner-${i}" class="runner js-runner js-instance-${i}" style="${positioning}:${position}%; width:${runnerSize[0]}px; height:${runnerSize[1]}px"></span>`,
  );
};

const setThis = function setThis$runner(this: SliderView, i: number): void {
  this.$runners[i] = this.$field.children('.runner');
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
