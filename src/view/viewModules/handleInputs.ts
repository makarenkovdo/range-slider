import SliderView from '../SliderView';
import { PanelSelectors } from '../viewInterfaces';
import prepareInputData from './handleInputs/handleInputsUtility';
import setMinValue from './handleInputs/handleInputsUtility';

const handleInputs = function handleChangeInputsAndCheckboxes(this: SliderView): void {
  // const $minValueInput = $(`#${this.id}-panel`).find('.js-slider-input__min-value');
  // const $maxValueInput = $(`#${this.id}-panel`).find('.js-slider-input__max-value');
  // const $runnerValueInput0 = $(`#${this.id}-panel`).find('.js-slider-input__runner-0-value');
  // const $runnerValueInput1 = $(`#${this.id}-panel`).find('.js-slider-input__runner-1-value');
  // const $runnerSizeInput = $(`#${this.id}-panel`).find('.js-slider-input__runner-size');
  // const $fieldThicknessInput = $(`#${this.id}-panel`).find('.js-slider-input__field-thickness');
  // const $rangeCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__is-range');
  // const $orientationCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__orientation');
  // const $scaleCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__has-scale');
  // const $barCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__has-bar');
  // const $tipCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__has-tip');
  // const input1 = document.querySelector('.js-slider-input__min-value');
  // console.log(input1);
  const $panel = document.querySelector(`#${this.id}-panel`);
  const minValueInput = $panel.querySelector('.js-slider-input__min-value');

  const handleInputChange = (this: SliderView) => {
    this.minMax[0] = minValueInput.value;
    this.subscriber.recieveInputsData(this);
  };
  minValueInput.addEventListener('change', () => handleInputChange.call(this));

  // $minValueInput.on('input', { thisView: this, min: $minValueInput.val()}, handleInputChange);
  // $maxValueInput.on('input', { thisView: this }, handleInputChange);
  // $runnerValueInput0.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $runnerValueInput1.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $runnerSizeInput.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $fieldThicknessInput.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $rangeCheckbox.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $orientationCheckbox.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $scaleCheckbox.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $barCheckbox.on('input', { thisView: this, instance: 0 }, handleInputChange);
  // $tipCheckbox.on('input', { thisView: this, instance: 0 }, handleInputChange);
  //   function logThis() {
  //     console.log('GHJGHJK');
  //   }
  //   input1.addEventListener('change', () => logThis());

  //   $(`#${this.id}-panel`).on('change', `.js-slider-input__min-value,
  //   .js-slider-input__max-value,
  //   .js-slider-input__has-tip,
  //  .js-slider-input__runner-0-value`,
  //   // { thisView: this, panelSelectors }, (e) => {
  //   { thisView: this }, (e) => {
  //     e.preventDefault();
  //     console.log('CHANGE');
  //     console.log(input1.value);

//     // prepareInputData(this, panelSelectors);
//   });
};

export default handleInputs;
