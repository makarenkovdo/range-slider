import { PresenterBuildParams } from '../../../presenter/presenterInterfaces';
import Panel from '../Panel';

const selectPanelNodes = function selectPanelInputNodes(this: Panel):void {
  const $panel = document.querySelector(`#${this.parent.id}-panel`);

  this.$minValueInput = $panel.querySelector('.js-slider-input__min-value');
  this.$maxValueInput = $panel.querySelector('.js-slider-input__max-value');
  this.$runnerSizeInput = $panel.querySelector('.js-slider-input__runner-size');
  this.$stepInput = $panel.querySelector('.js-slider-input__step');
  this.$isRangeInput = $panel.querySelector('.js-slider-input__is-range');
  this.$orientationInput = $panel.querySelector('.js-slider-input__orientation');
  this.$hasScaleInput = $panel.querySelector('.js-slider-input__has-scale');
  this.$hasBarInput = $panel.querySelector('.js-slider-input__has-bar');
  this.$hasTipInput = $panel.querySelector('.js-slider-input__has-tip');
  this.$runner0ValueInput = $panel.querySelector('.js-slider-input__runner-0-value');
  this.$runner1ValueInput = $panel.querySelector('.js-slider-input__runner-1-value');
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
  }: PresenterBuildParams,
): void {
  const {
    $minValueInput,
    $maxValueInput,
    $runnerSizeInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScaleInput,
    $hasBarInput,
    $hasTipInput,
    $runner0ValueInput,
    $runner1ValueInput,
  } = this;
  $(document).ready(() => {
    $minValueInput.value = `${minValue}`;
    $maxValueInput.value = `${maxValue}`;
    $runnerSizeInput.value = `${runnerSize[0]}`;
    $stepInput.value = `${step}`;
    $isRangeInput.checked = isRange;
    $orientationInput.checked = orientation === 'vertical';
    $hasScaleInput.checked = shouldAddScale;
    $hasBarInput.checked = shouldAddBar;
    $hasTipInput.checked = shouldAddTip;
    $runner0ValueInput.value = `${runnersInstantPosition[0]}`;
    $runner1ValueInput.value = `${runnersInstantPosition[1]}`;
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
    $runnerSizeInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScaleInput,
    $hasBarInput,
    $hasTipInput,
    $runner0ValueInput,
    $runner1ValueInput,
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
    $runnerSizeInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScaleInput,
    $hasBarInput,
    $hasTipInput,
    $runner0ValueInput,
    $runner1ValueInput,
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
  $runnerSizeInput.addEventListener('change', ():void => handleChange.call(
    this,
    runnersInstantPosition,
    actionType.runnerSize,
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
