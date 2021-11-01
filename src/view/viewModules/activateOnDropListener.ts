import SliderView from '../SliderView';
import cancelDragging from './onDrop/onDropUtility';

const activateOnDropListener = function onDropListenerAndHandler(this: SliderView): void {
  this.$field.on('mouseup touchend', { thisView: this }, cancelDragging);
  $('body').on('mouseup touchend', { thisView: this }, cancelDragging);
};

export default activateOnDropListener;
