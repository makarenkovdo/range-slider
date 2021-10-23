function cancelDragging(event) {
  event.preventDefault();
  event.stopPropagation();
  event.data.$field.removeClass('tap');
  event.data.$field.off('mousemove touchmove');
}
const activateOnDropListener = ($field) => {
  $field.on('mouseup touchend', { $field }, cancelDragging);
  $('body').on('mouseup touchend', { $field }, cancelDragging);
};

export default activateOnDropListener;
