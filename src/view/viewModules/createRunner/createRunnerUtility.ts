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
  const position:number = (minMax - i * ((runnerSize[switcher] / fieldSize[switcher]) * 100));
  const modificator = isVertical ? 'vertical' : 'horizontal';
  return {
    i, positioning, position, modificator,
  };
};

const addRunnerToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  runnerSize: number[],
): void => {
  const {
    i, positioning, position, modificator,
  } = preparedData;
  $id.append(
    `<span data-testid="test-runner-${i}" class="slider__runner slider__runner_${modificator} js-slider__runner_instance-${i}" style="${positioning}:${position}%; width:${runnerSize[0]}px; height:${runnerSize[1]}px"></span>`,
  );
};

const setThis = function setThis$runner(this: SliderView, i: number): void {
  this.$runners[i] = this.$field.children(`.js-slider__runner_instance-${i}`);
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
