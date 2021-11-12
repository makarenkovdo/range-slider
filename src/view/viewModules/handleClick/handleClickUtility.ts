import SliderView from '../../SliderView';

const prepareMovingCoordinates = (event: JQuery.ClickEvent, thisView: SliderView): number[] => {
  const cursorXY = [
    event.pageX - thisView.$field.position().left - 5,
    event.pageY - thisView.$field.position().top - 5,
  ];
  if (cursorXY[0] < 0) {
    cursorXY[0] = 0;
  }
  if (cursorXY[0] > thisView.fieldSize[0]) {
    cursorXY[0] = thisView.fieldSize[0];
  }
  return cursorXY;
};
const handleClickUtility = (event: JQuery.ClickEvent): void => {
  event.preventDefault();
  event.stopPropagation();
  const thisView = event.data as SliderView;
  const cursorXY = prepareMovingCoordinates(event, thisView);
  thisView.notifyFieldClick(cursorXY);
};

export default handleClickUtility;
