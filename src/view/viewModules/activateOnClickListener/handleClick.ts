import SliderView from '../../SliderView';

const handleClick = (event: JQuery.ClickEvent): void => {
  const eventData = event.data as { thisView: SliderView };
  const cursorXY = [event.offsetX, event.offsetY];
  eventData.thisView.notifyFieldClick(cursorXY);
};

export default handleClick;
