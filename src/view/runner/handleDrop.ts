import cancelDragging from './handleDrop/handleDropUtility';
import Runner from './Runner';

const handleDrop = function onDropListenerAndHandler(this: Runner): void {
  const { $field, $body } = this.parent;
  $field.on('mouseup touchend', { thisView: this.parent }, cancelDragging);
  $body.on('mouseup touchend', { thisView: this.parent }, cancelDragging);
};

export default handleDrop;
