import SliderView from '../../SliderView';
import notifyFieldClick from '../notifyFieldClick';
import { HandleClickDataType } from './fieldModulesInterfaces';
import defineNearestRunner from './handleClick/defineNearestRunner';

const handleClick = (event: JQuery.ClickEvent): void => {
  const eventData = event.data as { thisView: SliderView };
  const cursorXY = [event.offsetX, event.offsetY];
  eventData.thisView.notifyFieldClick(cursorXY);
};

export default handleClick;
