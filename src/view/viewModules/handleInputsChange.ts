import SliderView from '../SliderView';

const handleInputsChange = function handleInputsAndCheckboxesChange(this: SliderView): void {
  const $panel = document.querySelector(`#${this.id}-panel`);
  const $minValueInput: HTMLInputElement = $panel.querySelector('.js-slider-input__min-value');
  const $maxValueInput: HTMLInputElement = $panel.querySelector('.js-slider-input__max-value');
  const $runnerSizeInput: HTMLInputElement = $panel.querySelector('.js-slider-input__runner-size');
  const $stepInput: HTMLInputElement = $panel.querySelector('.js-slider-input__step');
  const $isRangeInput: HTMLInputElement = $panel.querySelector('.js-slider-input__is-range');
  const $orientationInput: HTMLInputElement = $panel.querySelector('.js-slider-input__orientation');
  const $hasScale: HTMLInputElement = $panel.querySelector('.js-slider-input__has-scale');
  const $hasBar: HTMLInputElement = $panel.querySelector('.js-slider-input__has-bar');
  const $hasTip: HTMLInputElement = $panel.querySelector('.js-slider-input__has-tip');
  const $runner0ValueInput:
  HTMLInputElement = $panel.querySelector('.js-slider-input__runner-0-value');
  const $runner1ValueInput:
  HTMLInputElement = $panel.querySelector('.js-slider-input__runner-1-value');
  let runnersInstantPosition = [0, 100];
  const handleMinInputChange = ():void => {
    this.minMax[0] = parseInt(($minValueInput.value), 10);
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  const handleMaxInputChange = ():void => {
    this.minMax[1] = parseInt(($maxValueInput.value), 10);
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  const handleRunner0InputChange = ():void => {
    runnersInstantPosition = [
      parseInt(($runner0ValueInput.value), 10),
      parseInt(($runner1ValueInput.value), 10),
    ];

    // this.notifyInputChange.call(this, runnersValue);
  };
  const handleRunner1InputChange = ():void => {
    runnersInstantPosition = [
      parseInt(($runner0ValueInput.value), 10),
      parseInt(($runner1ValueInput.value), 10),
    ];
    // this.notifyInputChange.call(this, runnersValue);
  };
  const handleStepInputChange = ():void => {
    this.step = parseInt(($stepInput.value), 10);
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  // const handleRunnerSizeInputChange = ():void => {
  //   this.runnerSize = parseInt(($runnerSizeInput.value), 10);
  //   this.notifyInputChange.call(this, runnersInstantPosition);
  // };
  const handleIsRangeInputChange = ():void => {
    this.isRange = $isRangeInput.checked;
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  const handleOrientationInputChange = ():void => {
    this.orientation = $orientationInput.checked ? 'vertical' : 'horizontal';
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  const handleHasScaleInputChange = ():void => {
    this.hasScale = $hasScale.checked;
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  const handleHasTipInputChange = ():void => {
    this.hasTip = $hasTip.checked;
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  const handleHasBarInputChange = ():void => {
    this.hasBar = $hasBar.checked;
    this.notifyInputChange.call(this, runnersInstantPosition);
  };
  $minValueInput.addEventListener('change', () => handleMinInputChange());
  $maxValueInput.addEventListener('change', () => handleMaxInputChange());
  $runner0ValueInput.addEventListener('change', () => handleRunner0InputChange());
  $runner1ValueInput.addEventListener('change', () => handleRunner1InputChange());
  // $runnerSizeInput.addEventListener('change', () => handleRunnerSizeInputChange());
  $stepInput.addEventListener('change', () => handleStepInputChange());
  $isRangeInput.addEventListener('change', () => handleIsRangeInputChange());
  $orientationInput.addEventListener('change', () => handleOrientationInputChange());
  $hasScale.addEventListener('change', () => handleHasScaleInputChange());
  $hasBar.addEventListener('change', () => handleHasBarInputChange());
  $hasTip.addEventListener('change', () => handleHasTipInputChange());
};

export default handleInputsChange;
