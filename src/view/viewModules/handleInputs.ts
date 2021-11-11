import SliderView from '../SliderView';

const handleInputs = function handleChangeInputsAndCheckboxes(this: SliderView): void {
  const $panel = document.querySelector(`#${this.id}-panel`);
  const minValueInput = $panel.querySelector('.js-slider-input__min-value');

  const handleInputChange = (this: SliderView) => {
    this.minMax[0] = minValueInput.value;
    this.subscriber.recieveInputsData(this);
  };
  minValueInput.addEventListener('change', () => handleInputChange.call(this));

};

export default handleInputs;
