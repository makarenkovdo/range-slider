import SliderView from '../SliderView';

const handleInputs = function handleChangeInputsAndCheckboxes(this: SliderView): void {
  const $panel = document.querySelector(`#${this.id}-panel`);
  const $minValueInput: HTMLInputElement = $panel.querySelector('.js-slider-input__min-value');
  const $maxValueInput: HTMLInputElement = $panel.querySelector('.js-slider-input__max-value');
  const $runner0ValueInput:
  HTMLInputElement = $panel.querySelector('.js-slider-input__runner-0-value');
  const $runner1ValueInput:
  HTMLInputElement = $panel.querySelector('.js-slider-input__runner-1-value');
  let runnersValue = [0, 0];
  const handleMinInputChange = ():void => {
    this.minMax[0] = parseInt(($minValueInput.value), 10);
    this.notifyInputChange.call(this, runnersValue);
  };
  const handleMaxInputChange = ():void => {
    this.minMax[1] = parseInt(($maxValueInput.value), 10);
    this.notifyInputChange.call(this, runnersValue);
  };
  const handleRunner0InputChange = ():void => {
    runnersValue = [
      parseInt(($runner0ValueInput.value), 10),
      parseInt(($runner1ValueInput.value), 10),
    ];

    // this.notifyInputChange.call(this, runnersValue);
  };
  const handleRunner1InputChange = ():void => {
    runnersValue = [
      parseInt(($runner0ValueInput.value), 10),
      parseInt(($runner1ValueInput.value), 10),
    ];
    console.log('CHANGE runnersValue', runnersValue);

    // this.notifyInputChange.call(this, runnersValue);
  };
  $minValueInput.addEventListener('change', () => handleMinInputChange());
  $maxValueInput.addEventListener('change', () => handleMaxInputChange());
  $runner0ValueInput.addEventListener('change', () => handleRunner0InputChange());
  $runner1ValueInput.addEventListener('change', () => handleRunner1InputChange());
};

export default handleInputs;
