/* eslint-disable fsd/no-function-declaration-in-event-listener */
import { BuildParams } from '../../../initializeTypes.js';
import Panel from '../Panel.js';

const selectPanelNodes = function selectPanelInputNodes(this: Panel):void {
  const $panel = document.querySelector(`#${this.id}-panel`);
  if ($panel) {
    this.$minValueInput = $panel.querySelector('.js-slider-input__min-value');
    this.$maxValueInput = $panel.querySelector('.js-slider-input__max-value');
    this.$runnerWidthInput = $panel.querySelector('.js-slider-input__runner-width');
    this.$runnerHeightInput = $panel.querySelector('.js-slider-input__runner-height');
    this.$stepInput = $panel.querySelector('.js-slider-input__step');
    this.$isRangeInput = $panel.querySelector('.js-slider-input__is-range');
    this.$orientationInput = $panel.querySelector('.js-slider-input__orientation');
    this.$hasScaleInput = $panel.querySelector('.js-slider-input__has-scale');
    this.$hasBarInput = $panel.querySelector('.js-slider-input__has-bar');
    this.$hasTipInput = $panel.querySelector('.js-slider-input__has-tip');
    this.$runner0ValueInput = $panel.querySelector('.js-slider-input__runner-0-value');
    this.$runner1ValueInput = $panel.querySelector('.js-slider-input__runner-1-value');
    this.$fieldThicknessInput = $panel.querySelector('.js-slider-input__field-thickness');
  }
};

const initializePanel = function initializeDefaultPanelValues(
  this: Panel,
  {
    minValue,
    maxValue,
    runnerSize,
    runnersInstantPosition,
    orientation,
    shouldAddBar,
    shouldAddScale,
    shouldAddTip,
    isRange,
    step,
    fieldThickness,
  }: BuildParams,
): void {
  this.orientation = orientation;
  this.minMax = [minValue, maxValue];
  this.isRange = isRange;
  this.fieldThickness = fieldThickness;
  this.hasBar = shouldAddBar;
  this.hasScale = shouldAddScale;
  this.hasTip = shouldAddTip;
  this.runnersPosition = runnersInstantPosition;
  this.runnerSize = runnerSize;
  this.step = step;
  const {
    $minValueInput,
    $maxValueInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScaleInput,
    $hasBarInput,
    $hasTipInput,
    $runner0ValueInput,
    $runner1ValueInput,
    $runnerHeightInput,
    $runnerWidthInput,
    $fieldThicknessInput,
  } = this;
  $(document).ready(() => {
    if ($minValueInput) $minValueInput.value = `${minValue}`;
    if ($maxValueInput) $maxValueInput.value = `${maxValue}`;
    if ($runnerHeightInput) $runnerHeightInput.value = `${runnerSize[1]}`;
    if ($runnerWidthInput) $runnerWidthInput.value = `${runnerSize[0]}`;
    if ($stepInput) $stepInput.value = `${step}`;
    if ($isRangeInput) $isRangeInput.checked = isRange;
    if ($orientationInput) $orientationInput.checked = (orientation === 'vertical');
    if ($hasScaleInput) $hasScaleInput.checked = shouldAddScale;
    if ($hasBarInput) $hasBarInput.checked = shouldAddBar;
    if ($hasTipInput) $hasTipInput.checked = shouldAddTip;
    if ($runner0ValueInput) $runner0ValueInput.value = `${runnersInstantPosition[0]}`;
    if ($runner1ValueInput) $runner1ValueInput.value = `${runnersInstantPosition[1]}`;
    if ($fieldThicknessInput) $fieldThicknessInput.value = `${fieldThickness}`;
  });
};

const handleChange = function hangleInputsAndCheckboxesChanges(
  this: Panel,
  event:_Event,
  actionType: string,
): void {
  switch (actionType) {
    case 'min': {
      this.minMax[0] = parseFloat((event.target as HTMLInputElement).value);
      break;
    }
    case 'max': {
      this.minMax[1] = parseFloat((event.target as HTMLInputElement).value);
      break;
    }
    case 'runnerValue0': {
      this.runnersPosition[0] = parseFloat((event.target as HTMLInputElement).value);
      break;
    }
    case 'runnerValue1': {
      this.runnersPosition[1] = parseFloat((event.target as HTMLInputElement).value);
      break;
    }
    case 'runnerHeight': {
      this.runnerSize[1] = parseInt(((event.target as HTMLInputElement).value), 10);
      break;
    }
    case 'runnerWidth': {
      this.runnerSize[0] = parseInt(((event.target as HTMLInputElement).value), 10);
      break;
    }
    case 'step': {
      this.step = parseFloat((event.target as HTMLInputElement).value);
      break;
    }
    case 'isRange': {
      this.isRange = (event.target as HTMLInputElement).checked;
      break;
    }
    case 'orientation': {
      this.orientation = (event.target as HTMLInputElement).checked ? 'vertical' : 'horizontal';

      break;
    }
    case 'hasScale': {
      this.hasScale = (event.target as HTMLInputElement).checked;
      break;
    }
    case 'hasTip': {
      this.hasTip = (event.target as HTMLInputElement).checked;
      break;
    }
    case 'hasBar': {
      this.hasBar = (event.target as HTMLInputElement).checked;
      break;
    }
    case 'fieldThickness': {
      this.fieldThickness = parseInt(((event.target as HTMLInputElement).value), 10);
      break;
    }
    default: break;
  }

  this.notifyInputChange.call(this);
};

const addOnChangeListener = function addInputAndCheckboxesOnChangeListener(
  this: Panel,
): void {
  const {
    $minValueInput,
    $maxValueInput,
    $runnerWidthInput,
    $runnerHeightInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScaleInput,
    $hasBarInput,
    $hasTipInput,
    $runner0ValueInput,
    $runner1ValueInput,
    $fieldThicknessInput,
  } = this;
  const actionType = {
    min: 'min',
    max: 'max',
    step: 'step',
    runnerValue0: 'runnerValue0',
    runnerValue1: 'runnerValue1',
    runnerWidth: 'runnerWidth',
    runnerHeight: 'runnerHeight',
    hasScale: 'hasScale',
    hasBar: 'hasBar',
    hasTip: 'hasTip',
    orientation: 'orientation',
    isRange: 'isRange',
    fieldThickness: 'fieldThickness',
  };
  if ($minValueInput) $minValueInput.addEventListener('change', (event):void => this.handleChange(event, actionType.min));
  if ($maxValueInput) $maxValueInput.addEventListener('change', (event):void => this.handleChange(event, actionType.max));
  if ($runner0ValueInput) $runner0ValueInput.addEventListener('change', (event):void => this.handleChange(event, actionType.runnerValue0));
  if ($runner1ValueInput) $runner1ValueInput.addEventListener('change', (event):void => this.handleChange(event, actionType.runnerValue1));
  if ($runnerWidthInput) $runnerWidthInput.addEventListener('change', (event):void => this.handleChange(event, actionType.runnerWidth));
  if ($runnerHeightInput) $runnerHeightInput.addEventListener('change', (event):void => this.handleChange(event, actionType.runnerHeight));
  if ($fieldThicknessInput) $fieldThicknessInput.addEventListener('change', (event):void => this.handleChange(event, actionType.fieldThickness));
  if ($stepInput) $stepInput.addEventListener('change', (event):void => this.handleChange(event, actionType.step));
  if ($orientationInput) $orientationInput.addEventListener('change', (event):void => this.handleChange(event, actionType.orientation));
  if ($isRangeInput) $isRangeInput.addEventListener('change', (event):void => this.handleChange(event, actionType.isRange));
  if ($hasBarInput) $hasBarInput.addEventListener('change', (event):void => this.handleChange(event, actionType.hasBar));
  if ($hasScaleInput) $hasScaleInput.addEventListener('change', (event):void => this.handleChange(event, actionType.hasScale));
  if ($hasTipInput) $hasTipInput.addEventListener('change', (event):void => this.handleChange(event, actionType.hasTip));
};

export {
  selectPanelNodes, initializePanel, handleChange, addOnChangeListener,
};
