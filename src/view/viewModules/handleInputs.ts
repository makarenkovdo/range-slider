import SliderView from '../SliderView';
import { PanelSelectors } from '../viewInterfaces';
import prepareInputData from './handleInputs/handleInputsUtility';
import setMinValue from './handleInputs/handleInputsUtility';

const handleInputs = function handleChangeInputsAndCheckboxes(this: SliderView): void {
  const $minValueInput = $(`#${this.id}-panel`).find('.js-slider-input__min-value');
  const $maxValueInput = $(`#${this.id}-panel`).find('.js-slider-input__max-value');
  const $runnerValueInput0 = $(`#${this.id}-panel`).find('.js-slider-input__runner-0-value');
  const $runnerValueInput1 = $(`#${this.id}-panel`).find('.js-slider-input__runner-1-value');
  const $runnerSizeInput = $(`#${this.id}-panel`).find('.js-slider-input__runner-size');
  const $fieldThicknessInput = $(`#${this.id}-panel`).find('.js-slider-input__field-thickness');
  const $rangeCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__is-range');
  const $orientationCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__orientation');
  const $scaleCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__has-scale');
  const $barCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__has-bar');
  const $tipCheckbox = $(`#${this.id}-panel`).find('.js-slider-input__has-tip');

  const panelSelectors:PanelSelectors = {
    $minValueInput,
    $maxValueInput,
    $runnerValueInput0,
    $runnerValueInput1,
    $runnerSizeInput,
    $fieldThicknessInput,
    $rangeCheckbox,
    $orientationCheckbox,
    $scaleCheckbox,
    $barCheckbox,
    $tipCheckbox,
  };
  // $minValueInput.on('input',{ thisView: this }, setMinValue);
  // $maxValueInput.on('input', { thisView: this }, setMaxValue);
  // $runnerValueInput0.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $runnerValueInput1.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $runnerSizeInput.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $fieldThicknessInput.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $rangeCheckbox.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $orientationCheckbox.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $scaleCheckbox.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $barCheckbox.on('input', { thisView: this, instance:0 }, setRunnerValue);
  // $tipCheckbox.on('input', { thisView: this, instance:0 }, setRunnerValue);

  $(`#${this.id}-panel`).on('change', `.js-slider-input__min-value,
  .js-slider-input__max-value,
  .js-slider-input__has-tip,
  .js-slider-input__runner-0-value`, { thisView: this, panelSelectors }, (e) => {
    e.preventDefault();
    console.log('CHANGE');

    prepareInputData(this, panelSelectors);
  });
};

export default handleInputs;
