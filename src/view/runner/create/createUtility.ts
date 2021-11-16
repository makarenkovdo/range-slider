import { Orientation } from '../../../presenter/presenterInterfaces';
import { PreparedDataType } from '../../tip/create/createUtility';
import Runner from '../Runner';

const prepareRunnerArgs = (
  i: number,
  isVertical:boolean,
  runnerSize: number[],
  fieldSize: number[],
  stepPosition: number,
): PreparedDataType => {
  let positioning = ['left', 'top'];
  // const minMax = 0;
  let switcher = [0, 1];
  const instance = i;
  const mainPositionCorrector = 5 - runnerSize[0] / 2;
  if (isVertical) {
    positioning = ['top', 'left'];
    // minMax = fieldSize[1];
    switcher = [1, 0];
  }
  const thicknessCorrector = runnerSize[switcher[1]] / 2 + 1;

  const positionInPx = Math.abs(
    fieldSize[switcher[0]] * switcher[0] - stepPosition * (fieldSize[switcher[0]] / 100),
  );

  const position = [
    positionInPx + mainPositionCorrector,
    -thicknessCorrector + fieldSize[switcher[1]] * 0.5];
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

const setThis = function setThis$runner(this: Runner, i: number, stepPosition: number): void {
  this.$elements[i] = this.parent.$field.children(`.js-slider__runner_instance-${i}`);
  this.positions[i] = stepPosition;
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
