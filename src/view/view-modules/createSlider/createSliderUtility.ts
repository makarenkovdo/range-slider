import SliderView from '../../slider-view';
import { PreparedDataType } from '../createTipNumber/createTipNumberUtility';

const prepareSliderArgs = (i: number, isVertical: boolean): PreparedDataType => {
  let positioning = 'left';
  let minMax = 100 * i;

  if (isVertical) {
    positioning = 'top';
    minMax = 100 - minMax;
  }

  //  set min = 0%, max = 100% for left/top positions
  return { i, positioning, minMax };
};

const addSliderToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  sliderSize: number[],
): void => {
  const { i, positioning, minMax } = preparedData;
  $id.append(
    `<span class="slider instance-${i}" style="${positioning}:${minMax}%; width:${sliderSize[0]}px; height:${sliderSize[1]}px"></span>`,
  );
};

const setThis = function setThis$slider(this: SliderView): void {
  this.$slider = this.$field.children('.slider ');
};

export { setThis, addSliderToDOM, prepareSliderArgs };
