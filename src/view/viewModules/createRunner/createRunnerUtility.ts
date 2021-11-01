import SliderView from '../../SliderView';
import { PreparedDataType } from '../createTipNumber/createTipNumberUtility';

const prepareRunnerArgs = (i: number, isVertical: boolean): PreparedDataType => {
  let positioning = 'left';
  let minMax = 100 * i;

  if (isVertical) {
    positioning = 'top';
    minMax = 100 - minMax;
  }

  //  set min = 0%, max = 100% for left/top positions
  // console.log(i, positioning, minMax, isVertical);

  return { i, positioning, minMax };
};

const addRunnerToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  runnerSize: number[],
): void => {
  const { i, positioning, minMax } = preparedData;
  $id.append(
    `<span data-testid="test-runner-${i}" class="runner js-runner js-instance-${i}" style="${positioning}:${minMax}%; width:${runnerSize[0]}px; height:${runnerSize[1]}px"></span>`,
  );
};

const setThis = function setThis$runner(this: SliderView, i: number): void {
  this.$runners[i] = this.$field.children('.runner');
  console.log('!!!!!!!! sdfdsf', this.$runners[i]);
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
