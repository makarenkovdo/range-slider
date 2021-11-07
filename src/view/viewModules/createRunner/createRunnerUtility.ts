import { Orientation } from '../../../presenter/presenterInterfaces';
import SliderView from '../../SliderView';
import { PreparedDataType } from '../createTipNumber/createTipNumberUtility';

const prepareRunnerArgs = (i: number, isVertical: boolean, runnerSize: number[],
  fieldSize: number[]): PreparedDataType => {
  let positioning = 'left';
  let minMax = 0;
  let switcher = 0;

  if (isVertical) {
    positioning = 'top';
    minMax = fieldSize[1];
    switcher = 1;
  }
  // const position:number = (minMax - i * ((runnerSize[switcher] / fieldSize[switcher]) * 100));
  const position:number = Math.abs(minMax - i * fieldSize[switcher]);
  return {
    i, positioning, position,
  };
};

const addRunnerToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  runnerSize: number[],
  orientation: Orientation,
): void => {
  const {
    i, positioning, position,
  } = preparedData;
  $id.append(
    `<span data-testid="test-runner-${i}" class="slider__runner slider__runner_${orientation} js-slider__runner_instance-${i}" style="${positioning}:${position}px; width:${runnerSize[0]}px; height:${runnerSize[1]}px"></span>`,
  );
};

const setThis = function setThis$runner(this: SliderView, i: number): void {
  this.$runners[i] = this.$field.children(`.js-slider__runner_instance-${i}`);
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
