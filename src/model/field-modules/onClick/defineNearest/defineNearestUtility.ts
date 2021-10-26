import SliderModel from '../../../slider-model';
import { DataType } from '../onClickUtility';

const calculateAndCompareLengths = (cursorXY: number, slidersPosition: number[]): number => {
  const lengthToFirstSlider = Math.abs(cursorXY - slidersPosition[0]);
  const lengthToSecondSlider = Math.abs(cursorXY - slidersPosition[1]);
  return lengthToFirstSlider - lengthToSecondSlider < 0 ? 0 : 1;
};

type PrepareDataForCompareReturned = {
  cursorXY: number;
  slidersPosition: number[];
};

const prepareDataForCompare = (
  event: JQuery.ClickEvent,
  sliders: SliderModel[],
): PrepareDataForCompareReturned => {
  const evenData = event.data as DataType;
  const cursorXY = [event.offsetX, event.offsetY];
  let positioning = 'left';
  let xySwitcher = 0;
  if (evenData.field.isVertical) {
    positioning = 'top';
    xySwitcher = 1;
  }
  // const slidersPositionArray = [sliders[0].positionInPercent,sliders[1].positionInPercent];

  // prettier-ignore
  const slidersPosition = [0, 1].map((v) => parseInt(evenData.field.$element.children(`.slider.instance-${v}`).css(positioning), 10));
  return { cursorXY: cursorXY[xySwitcher], slidersPosition };
};

export { prepareDataForCompare, calculateAndCompareLengths };
