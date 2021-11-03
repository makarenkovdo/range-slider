import SliderView from '../../SliderView';

const handleClickUtility = (event: JQuery.ClickEvent): void => {
  const thisView = event.data as SliderView;
  const cursorXY = [event.offsetX, event.offsetY];
  thisView.notifyFieldClick(cursorXY);
};

export default handleClickUtility;
