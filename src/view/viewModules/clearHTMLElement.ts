import SliderView from '../SliderView';

// how to test? this.$bar is a the result of div-appending and ALL THIS MODULE
const clearHTMLElement = function clearHTMLElementForRebuild(this: SliderView): void {
const $slider = document.querySelector(`#${this.id}`);
console.log($slider);
$slider.innerHTML = '';

};

export default clearHTMLElement;
