import SliderModel from '../../../model/slider-model';
import SliderView from '../../slider-view';

type DatasForUpdating = { stepPosition: number; instance: number; positioning: string[] };

const defineSliderType = (isVertical: boolean, updatingSlider: SliderModel): DatasForUpdating => {
  const positioning = [
    ['left', 'width'],
    ['top', 'height'],
  ];
  const { stepPosition, instance } = updatingSlider;
  const datasForUpdating = { stepPosition, instance, positioning: positioning[0] };
  // eslint-disable-next-line prefer-destructuring
  if (isVertical) datasForUpdating.positioning = positioning[1];
  return datasForUpdating;
};
type SetThisSliderPositionArgs = {
  instance: number;
  stepPosition: number;
};
const setThisSliderPosition = function setThisSliderPositionToThis(
  this: SliderView,
  { instance, stepPosition }: SetThisSliderPositionArgs,
): void {
  this.slidersPosition[instance] = stepPosition;
};

//  prettier-ignore
// getting the percent of sliderWidth to fieldWidth
const calculatePreperatoryPosition = ($field: JQuery<HTMLElement>, positioning: string[]):number => (parseInt($field.children('.slider').css(positioning[1]), 10)
    / parseInt($field.css(positioning[1]), 10))
    * 50;

type UpdatePositionToDOMArgs = { stepPosition: number; instance: number; positioning: string[] };

// prettier-ignore
const updatePositionToDOM = (
  { stepPosition, instance, positioning }:UpdatePositionToDOMArgs,
  isVertical:boolean, $field:JQuery<HTMLElement>,
):void => {
  const preperatoryPosition = calculatePreperatoryPosition($field, positioning);
  const getVerticalPosition = () => `${100 - stepPosition - preperatoryPosition}%`;
  const getHorizontalPosition = () => `${stepPosition - preperatoryPosition}%`;
  const position = isVertical
    ? getVerticalPosition()
    : getHorizontalPosition();
  $field.find(`.instance-${instance}`).css(positioning[0], position);
};

export { setThisSliderPosition, defineSliderType, updatePositionToDOM };
