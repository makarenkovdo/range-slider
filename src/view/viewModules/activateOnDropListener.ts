import cancelDragging from './onDrop/onDropUtility';

const activateOnDropListener = ($field: JQuery<HTMLElement>): void => {
  $field.on('mouseup touchend', { $field }, cancelDragging);
  $('body').on('mouseup touchend', { $field }, cancelDragging);
};

export default activateOnDropListener;
