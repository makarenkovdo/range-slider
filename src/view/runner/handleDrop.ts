import cancelDragging from './handleDrop/handleDropUtility';
import Runner from './Runner';

const handleDrop = function onDropListenerAndHandler(this: Runner): void {
  const { $field, $body } = this.parent;
  $field.on('mouseup', { thisView: this.parent }, cancelDragging);
  $body.on('mouseup', { thisView: this.parent }, cancelDragging);
  $field.on('touchend', { thisView: this.parent }, cancelDragging);
  $body.on('touchend', { thisView: this.parent }, cancelDragging);
};

export default handleDrop;
