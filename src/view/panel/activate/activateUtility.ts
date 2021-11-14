import { PresenterBuildParams } from '../../../presenter/presenterInterfaces';
import Panel from '../Panel';

const selectPanelNodes = function selectPanelInputNodes(this: Panel):void {
  const $panel = document.querySelector(`#${this.parent.id}-panel`);

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
  }: PresenterBuildParams,
): void {
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
    $minValueInput.value = `${minValue}`;
    $maxValueInput.value = `${maxValue}`;
    $runnerHeightInput.value = `${runnerSize[1]}`;
    $runnerWidthInput.value = `${runnerSize[0]}`;
    $stepInput.value = `${step}`;
    $isRangeInput.checked = isRange;
    $orientationInput.checked = (orientation === 'vertical');
    $hasScaleInput.checked = shouldAddScale;
    $hasBarInput.checked = shouldAddBar;
    $hasTipInput.checked = shouldAddTip;
    $runner0ValueInput.value = `${runnersInstantPosition[0]}`;
    $runner1ValueInput.value = `${runnersInstantPosition[1]}`;
    $fieldThicknessInput.value = `${fieldThickness}`;
  });
};
const handleChange = function hangleInputsAndCheckboxesChanges(
  this: Panel,

  runnersInstantPosition: number[],
  actionType: string,
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
  let newRunnersInstantPosition:number[] = runnersInstantPosition;

  switch (actionType) {
    case 'min': {
      this.parent.minMax[0] = parseFloat($minValueInput.value);
      break;
    }
    case 'max': {
      this.parent.minMax[1] = parseFloat($maxValueInput.value);
      break;
    }
    case 'runnerValue': {
      newRunnersInstantPosition = [
        parseFloat($runner0ValueInput.value),
        parseFloat($runner1ValueInput.value),
      ]; break;
    }
    case 'runnerSize': {
      this.parent.runner.size = [
        parseInt(($runnerWidthInput.value), 10),
        parseInt(($runnerHeightInput.value), 10),
      ];
      break;
    }
    case 'step': {
      this.parent.runner.step = parseFloat($stepInput.value);
      break;
    }
    case 'isRange': {
      this.parent.isRange = $isRangeInput.checked;
      break;
    }
    case 'orientation': {
      this.parent.orientation = $orientationInput.checked ? 'vertical' : 'horizontal';
      break;
    }
    case 'hasScale': {
      this.parent.hasScale = $hasScaleInput.checked;
      break;
    }
    case 'hasTip': {
      this.parent.hasTip = $hasTipInput.checked;
      break;
    }
    case 'hasBar': {
      this.parent.hasBar = $hasBarInput.checked;
      break;
    }
    case 'fieldThickness': {
      this.parent.fieldThickness = parseInt(($fieldThicknessInput.value), 10);
      break;
    }
    default: // do nothing;
  }
  this.notifyInputChange.call(this, newRunnersInstantPosition);
};

const addOnChangeListener = function addInputAndCheckboxesOnChangeListener(
  this: Panel,
): void {
  const runnersInstantPosition = [0, 100];
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
    runnerValue: 'runnerValue',
    runnerSize: 'runnerSize',
    hasScale: 'hasScale',
    hasBar: 'hasBar',
    hasTip: 'hasTip',
    orientation: 'orientation',
    isRange: 'isRange',
    fieldThickness: 'fieldThickness',
  };
  $minValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.min,
  ));
  $maxValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.max,
  ));
  $runner0ValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.runnerValue,
  ));
  $runner1ValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.runnerValue,
  ));
  $runnerWidthInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.runnerSize,
  ));
  $runnerHeightInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.runnerSize,
  ));
  $fieldThicknessInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.fieldThickness,
  ));
  $stepInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.step,
  ));
  $orientationInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.orientation,
  ));
  $isRangeInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.isRange,
  ));
  $hasBarInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.hasBar,
  ));
  $hasScaleInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.hasScale,
  ));
  $hasTipInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.hasTip,
  ));
};

export {
  selectPanelNodes, initializePanel, handleChange, addOnChangeListener,
};
