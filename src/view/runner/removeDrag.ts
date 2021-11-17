import notifySubscriber from './handleDrag/handleDragUtility';
import Runner from './Runner';

const removeDrag = function removeDragBeforeRebuild(
  this: Runner,
  instance: number,
): void {
  const { $field } = this.parent;
console.log('OFFF?');

  $field.off();
};
export default removeDrag;
