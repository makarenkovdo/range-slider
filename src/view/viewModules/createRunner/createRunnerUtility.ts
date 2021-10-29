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
  return { i, positioning, minMax };
};

const addRunnerToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  runnerSize: number[],
): void => {
  const { i, positioning, minMax } = preparedData;
  $id.append(
    `<span data-testid="test-runner-${i}" class="runner instance-${i}" style="${positioning}:${minMax}%; width:${runnerSize[0]}px; height:${runnerSize[1]}px"></span>`,
  );
};

const setThis = function setThis$runner(this: SliderView, i: number): void {
  this.$runner[i] = this.$field.children('.runner');
  console.log(this.borderWidth);
  this.borderWidth = parseInt(this.$field.css('border-width'), 10);
  console.log(this.borderWidth);
};

export { setThis, addRunnerToDOM, prepareRunnerArgs };
