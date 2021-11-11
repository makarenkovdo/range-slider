import SliderView from '../SliderView';
import prepareInputData from './handleInputs/handleInputsUtility';
import setMinValue from './handleInputs/handleInputsUtility';

const handleInputs = function handleChangeInputsAndCheckboxes(this: SliderView): void {
  const $minValueInput = $(this.$field).find('.panel_min-value');
  const $maxValueInput = $(this.$field).find('.panel_max-value');
  const $runnerValueInput0 = $(this.$field).find('.panel__runner-0-value');
  const $runnerValueInput1 = $(this.$field).find('.panel__runner-1-value');
  const $runnerSizeInput = $(this.$field).find('.panel__runner-size');
  const $fieldThicknessInput = $(this.$field).find('.panel__field-thickness');
  const $rangeCheckbox = $(this.$field).find('.panel__is-range');
  const $orientationCheckbox = $(this.$field).find('.panel__orientation');
  const $scaleCheckbox = $(this.$field).find('.panel__scale');
  const $barCheckbox = $(this.$field).find('.panel__bar');
  const $tipCheckbox = $(this.$field).find('.panel__tip');

  const panelSelectors = {
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

  $(this.$field).on('change', '.panel_min-value,.panel_max-value', {thisView: this, panelSelectors}, (e) => {
    e.preventDefault();
        prepareInputData( this, panelSelectors);

  });
};

export default handleInputs;
