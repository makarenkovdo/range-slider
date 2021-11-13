import SliderView from '../SliderView';
import cancelDragging from './handleDrop/handleDropUtility';

const handleDrop = function onDropListenerAndHandler(this: SliderView): void {
  this.$field.on('mouseup touchend', { thisView: this }, cancelDragging);
  this.$body.on('mouseup touchend', { thisView: this }, cancelDragging);
};

export default handleDrop;
