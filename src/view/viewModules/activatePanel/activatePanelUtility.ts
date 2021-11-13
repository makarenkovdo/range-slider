import { PresenterBuildParams } from '../../../presenter/presenterInterfaces';
import SliderView from '../../SliderView';
import { PanelSelectors } from '../../viewInterfaces';

const selectPanelNodes = (id:string):PanelSelectors => {
  const $panel = document.querySelector(`#${id}-panel`);

  const panelSelectors: PanelSelectors = {
    $minValueInput: $panel.querySelector('.js-slider-input__min-value'),
    $maxValueInput: $panel.querySelector('.js-slider-input__max-value'),
    $runnerSizeInput: $panel.querySelector('.js-slider-input__runner-size'),
    $stepInput: $panel.querySelector('.js-slider-input__step'),
    $isRangeInput: $panel.querySelector('.js-slider-input__is-range'),
    $orientationInput: $panel.querySelector('.js-slider-input__orientation'),
    $hasScale: $panel.querySelector('.js-slider-input__has-scale'),
    $hasBar: $panel.querySelector('.js-slider-input__has-bar'),
    $hasTip: $panel.querySelector('.js-slider-input__has-tip'),
    $runner0ValueInput: $panel.querySelector('.js-slider-input__runner-0-value'),
    $runner1ValueInput: $panel.querySelector('.js-slider-input__runner-1-value'),
  };

  return panelSelectors;
};

const initializePanel = function initializeDefaultPanelValues(
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
  {
    $minValueInput,
    $maxValueInput,
    $runnerSizeInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScale,
    $hasBar,
    $hasTip,
    $runner0ValueInput,
    $runner1ValueInput,
  }: PanelSelectors,
): void {
  $(document).ready(() => {
    $minValueInput.value = minValue;
    $maxValueInput.value = maxValue;
    $runnerSizeInput.value = runnerSize;
    $stepInput.value = step;
    $isRangeInput.checked = isRange;
    $orientationInput.checked = orientation === 'vertical';
    $hasScale.checked = shouldAddScale;
    $hasBar.checked = shouldAddBar;
    $hasTip.checked = shouldAddTip;
    $runner0ValueInput.value = runnersInstantPosition[0];
    $runner1ValueInput.value = runnersInstantPosition[1];
  });
};
const handleChange = function hangleInputsAndCheckboxesChanges(
  this: SliderView,
  {
    $minValueInput,
    $maxValueInput,
    $runnerSizeInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScale,
    $hasBar,
    $hasTip,
    $runner0ValueInput,
    $runner1ValueInput,
  }: PanelSelectors,
  runnersInstantPosition: number[],
  actionType: string,
): void {

  let newRunnersInstantPosition = runnersInstantPosition;

  switch (actionType) {
    case 'min': {
      this.minMax[0] = parseInt(($minValueInput.value), 10);
      break;
    }
    case 'max': {
      this.minMax[1] = parseInt(($maxValueInput.value), 10);
      break;
    }
    case 'runnerValue': {
      newRunnersInstantPosition = [
        parseInt(($runner0ValueInput.value), 10),
        parseInt(($runner1ValueInput.value), 10),
      ]; break;
    }
    case 'step': {
      this.step = parseInt(($stepInput.value), 10);
      break;
    }
    case 'isRange': {
      this.isRange = $isRangeInput.checked;
      break;
    }
    case 'orientation': {
      this.orientation = $orientationInput.checked ? 'vertical' : 'horizontal';
      break;
    }
    case 'hasScale': {
      this.hasScale = $hasScale.checked;
      break;
    }
    case 'hasTip': {
      this.hasTip = $hasTip.checked;
      break;
    }
    case 'hasBar': {
      this.hasBar = $hasBar.checked;
      break;
    }
    default: // do nothing;
  }
  this.notifyInputChange.call(this, newRunnersInstantPosition);
};
const addOnChangeListener = function addInputAndCheckboxesOnChangeListener(
  this: SliderView,
  panelSelectors: PanelSelectors,
): void {
  const runnersInstantPosition = [0, 100];
  const {
    $minValueInput,
    $maxValueInput,
    $runnerSizeInput,
    $stepInput,
    $isRangeInput,
    $orientationInput,
    $hasScale,
    $hasBar,
    $hasTip,
    $runner0ValueInput,
    $runner1ValueInput,
  } = panelSelectors;
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
    panelSelectors,
    runnersInstantPosition,
    actionType.min,
  ));
  $maxValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.max,
  ));
  $runner0ValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.runnerValue,
  ));
  $runner1ValueInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.runnerValue,
  ));
  $runnerSizeInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.runnerSize,
  ));
  $stepInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.step,
  ));
  $orientationInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.orientation,
  ));
  $isRangeInput.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.isRange,
  ));
  $hasBar.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.hasBar,
  ));
  $hasScale.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.hasScale,
  ));
  $hasTip.addEventListener('change', ():void => handleChange.call(
    this,
    panelSelectors,
    runnersInstantPosition,
    actionType.hasTip,
  ));
};

export {
  selectPanelNodes, initializePanel, handleChange, addOnChangeListener,
};
