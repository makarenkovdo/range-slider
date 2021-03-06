import Bar from './Bar';

const createBar = function addBarToDomAndSetThisBar(this: Bar, fieldThickness: number): void {
  const { parent } = this;
  const addBarToDom = () => {
    const widthOrHeight = parent.isVertical ? 'width' : 'height';
    $(document).ready(() => {
      parent.$field.append(
        `<div data-testid='test-slider-bar' class='slider__bar slider__bar_${parent.orientation} js-slider__bar' style='${widthOrHeight}: ${fieldThickness}'></div>`,
      );
    });
  };

  const setThis$bar = () => {
    $(document).ready(() => {
      this.$bar = parent.$field.children('.js-slider__bar');
    });

    this.fieldThickness = fieldThickness;
  };
  addBarToDom();
  setThis$bar();
};

export default createBar;
