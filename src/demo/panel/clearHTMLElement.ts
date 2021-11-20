import Panel from './Panel';

const clearHTMLElement = function clearHTMLElementForRebuild(this: Panel, id:string): void {
  const $slider = document.querySelector(`#${id}`);
  $(document).ready(() => {
    if ($slider) {
      $slider.innerHTML = '';
      const prevOrientation = this.parent.orientation === 'vertical' ? 'horizontal' : 'vertical';
      $slider.classList.remove(`slider_${prevOrientation}`);
      $slider.classList.remove(`js_slider_${prevOrientation}`);
    }
  });
};
export default clearHTMLElement;
