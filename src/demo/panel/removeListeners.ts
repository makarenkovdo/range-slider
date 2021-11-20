const removeListeners = function removeDragBeforeRebuild(
  id:string,
): void {
  const $slider = $(`#${id}`);
  $slider.off();
};
export default removeListeners;
