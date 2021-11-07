import { Orientation } from '../../../presenter/presenterInterfaces';
import SliderView from '../../SliderView';
import { PreparedDataType } from '../createTipNumber/createTipNumberUtility';

const prepareRunnerArgs = (i: number, isVertical: boolean, runnerSize: number[],
  fieldSize: number[]): PreparedDataType => {
  let positioning = ['left', 'top'];
  let minMax = 0;
  let switcher = [0, 1];
  const instance = i;

  if (isVertical) {
    positioning = ['top', 'left'];
    minMax = fieldSize[1];
    switcher = [1, 0];
  }
  // const position:number = (minMax - i * ((runnerSize[switcher] / fieldSize[switcher]) * 100));
  console.log(runnerSize[switcher[0]], fieldSize[switcher[1]], ' runnerSize[switcher[0]] fieldSize[switcher[1]]');

  const position = [
    Math.abs(minMax - i * fieldSize[switcher[0]]),
    -runnerSize[switcher[0]] * 0.5 + fieldSize[switcher[1]] * 0.5 + 1];
  return {
    instance, positioning, position,
  };
};

const addRunnerToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  runnerSize: number[],
  orientation: Orientation,
): void => {
  const {
    instance, positioning, position,
  } = preparedData;
  $id.append(
    `<span data-testid="test-runner-${instance}" class="slider__runner slider__runner_${orientation} js-slider__runner_instance-${instance}" style="${positioning[0]}:${position[0]}px; ${positioning[1]}:${position[1]}px; width:${runnerSize[0]}px; height:${runnerSize[1]}px"></span>`,
  );
};

const setThis = function setThis$runner(this: SliderView, i: number): void {
  this.$runners[i] = this.$field.children(`.js-slider__runner_instance-${i}`);
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
