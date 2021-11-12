import SliderView from '../SliderView';

const handleInputs = function handleChangeInputsAndCheckboxes(this: SliderView): void {
  const $panel = document.querySelector(`#${this.id}-panel`);
  const $minValueInput = $panel.querySelector('.js-slider-input__min-value');
  const $maxValueInput = $panel.querySelector('.js-slider-input__max-value');

  const handleInputChange = (this: SliderView):void => {
    this.minMax[0] = $minValueInput.value;
    this.subscriber.recieveInputsData(this);
  };
  $minValueInput.addEventListener('change', () => handleInputChange.call(this));

};

export default handleInputs;
