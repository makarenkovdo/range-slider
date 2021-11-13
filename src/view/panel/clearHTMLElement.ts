import SliderView from '../SliderView';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const clearHTMLElement = function clearHTMLElementForRebuild(id:string): void {
  const $slider = document.querySelector(`#${id}`);
  $(document).ready(() => {
    $slider.innerHTML = '';
  });
};
export default clearHTMLElement;
