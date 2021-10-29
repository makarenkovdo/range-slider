import SliderView from '../SliderView';
import cancelDragging from './onDrop/onDropUtility';

const activateOnDropListener = function onDropListenerAndHandler(this: SliderView): void {
  this.$field.on('mouseup touchend', { $field: this.$field }, cancelDragging);
  $('body').on('mouseup touchend', { $field: this.$field }, cancelDragging);
};

export default activateOnDropListener;
