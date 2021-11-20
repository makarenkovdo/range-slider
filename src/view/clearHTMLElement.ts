import { Orientation } from '../presenter/presenterInterfaces';

const clearHTMLElement = function clearHTMLElementForRebuild(
  id:string,
  orientation: Orientation,
): void {
  const $slider = document.querySelector(`#${id}`);
  $(document).ready(() => {
    if ($slider) {
      $slider.innerHTML = '';
      const prevOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $slider.classList.remove(`slider_${prevOrientation}`);
      $slider.classList.remove(`js_slider_${prevOrientation}`);
    }
  });
};
export default clearHTMLElement;
