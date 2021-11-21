/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BuildParams } from '../../../src/presenter/presenterInterfaces';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
  <section id="first-panel" class="panel">
  <div class="panel__tools">
    <div class="panel__inputs">
      <div class="panel__min-value"><label">MIN VALUE</label><input type="number" class="js-slider-input__min-value"></div>
      <div class="panel__max-value"><label">MAX VALUE</label><input type="number" class="js-slider-input__max-value"></div>
      <div class="panel__runner-0-value"><label">RUNNER-1 VALUE</label><input type="number" class="js-slider-input__runner-0-value"></div>
      <div class="panel__runner-1-value"><label">RUNNER-2 VALUE</label><input type="number" class="js-slider-input__runner-1-value"></div>
      <div class="panel__runner-width"><label">RUNNER WIDTH</label><input min="6" max="50" type="number" class="js-slider-input__runner-width"></div>
      <div class="panel__runner-height"><label">RUNNER HEIGHT</label><input type="number" class="js-slider-input__runner-height"></div>
      <div class="panel__step"><label">STEP</label><input type="number" class="js-slider-input__step"></div>
      <div class="panel__field-thickness"><label">FIELD THICKNESS</label><input type="number" class="js-slider-input__field-thickness"></div>
    </div>
    <div class="panel__checkboxes">
      <div class="panel__is-range"><label>IS RANGE</label><input type="checkbox" class="js-slider-input__is-range"></div>
      <div class="panel__orientation"><label>IS VERTICAL</label><input type="checkbox" class="js-slider-input__orientation"></div>
      <div class="panel__scale"><label>HAS SCALE</label><input type="checkbox" class="js-slider-input__has-scale"></div>
      <div class="panel__bar"><label>HAS BAR</label><input type="checkbox" class="js-slider-input__has-bar"></div>
      <div class="panel__tip"><label>HAS TIP</label><input type="checkbox" class="js-slider-input__has-tip"></div>
    </div>
    </div>  
<div style="width: 500px; height: 500px; margin-bottom: 100px;">
  <div id="first" class="slider"></div>
</div>
</section>
    `;
});

describe('panel test', () => {
  const testedSlider = new SliderPresenter('first', {});
  const createRangeSliderTestArgs: BuildParams = {
    shouldAddTip: true,
    shouldAddBar: true,
    step: 2,
    maxValue: 5,
    minValue: 1,
    isRange: true,
    shouldAddScale: true,
    runnerSize: [12, 12],
    runnersInstantPosition: [9, 14],
    orientation: 'vertical',
    fieldThickness: 6,
  };

  test('if functions rebuild call clearHTMLElement', async () => {
    await waitFor(() => {
      expect(testedSlider['view'].id).toBeDefined();
    });
    const clearHTMLElement = jest.fn();
    testedSlider['view'].clearHTMLElement = clearHTMLElement;
    testedSlider['rebuild'](createRangeSliderTestArgs);
    expect(clearHTMLElement).toHaveBeenCalled();
  });
  test('if clearHTMLElement clear $field', async () => {
    await waitFor(() => {
      expect(testedSlider['view'].id).toBeDefined();
    });
    const clearHTMLElement = jest.fn();
    testedSlider['view'].clearHTMLElement = clearHTMLElement;
    testedSlider['rebuild'](createRangeSliderTestArgs);
    const $field = $('#first');
    expect($field.html()).toBe('');
  });
});
