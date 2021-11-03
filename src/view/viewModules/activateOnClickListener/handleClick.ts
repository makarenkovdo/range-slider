import SliderView from '../../SliderView';

const handleClick = (event: JQuery.ClickEvent): void => {
  const thisView = event.data as SliderView;
  const cursorXY = [event.offsetX, event.offsetY];
  console.log(cursorXY);

  thisView.notifyFieldClick(cursorXY);
};

export default handleClick;
