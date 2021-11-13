const clearHTMLElement = function clearHTMLElementForRebuild(id:string): void {
  const $slider = document.querySelector(`#${id}`);
  $(document).ready(() => {
    $slider.innerHTML = '';
  });
};
export default clearHTMLElement;
