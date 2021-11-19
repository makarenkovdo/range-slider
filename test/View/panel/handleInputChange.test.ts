/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PresenterBuildParams } from '../../../src/presenter/presenterInterfaces';
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
  const createRangeSliderTestArgs: PresenterBuildParams = {
    hasInputPanel: true,
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
  };

  test('if changing the input would call notifyInputChange-function', async () => {
    await waitFor(() => {
      expect(testedSlider['view'].id).toBeDefined();
    });
    const notifyInputChange = jest.fn();
    testedSlider['view'].panel.notifyInputChange = notifyInputChange;
    testedSlider['activatePanel'](createRangeSliderTestArgs);
    const event = new Event('change');
    const elem1 = document.querySelector('.js-slider-input__min-value');
    const elem2 = document.querySelector('.js-slider-input__max-value');
    const elem3 = document.querySelector('.js-slider-input__runner-0-value');
    const elem4 = document.querySelector('.js-slider-input__runner-1-value');
    const elem5 = document.querySelector('.js-slider-input__runner-width');
    const elem6 = document.querySelector('.js-slider-input__runner-height');
    const elem7 = document.querySelector('.js-slider-input__field-thickness');
    const elem8 = document.querySelector('.js-slider-input__step');
    const elem9 = document.querySelector('.js-slider-input__orientation');
    const elem10 = document.querySelector('.js-slider-input__has-scale');
    const elem11 = document.querySelector('.js-slider-input__has-bar');
    const elem12 = document.querySelector('.js-slider-input__has-tip');
    elem1.dispatchEvent(event);
    elem2.dispatchEvent(event);
    elem3.dispatchEvent(event);
    elem4.dispatchEvent(event);
    elem5.dispatchEvent(event);
    elem6.dispatchEvent(event);
    elem7.dispatchEvent(event);
    elem8.dispatchEvent(event);
    elem9.dispatchEvent(event);
    elem10.dispatchEvent(event);
    elem11.dispatchEvent(event);
    elem12.dispatchEvent(event);

    expect(notifyInputChange).toHaveBeenCalled();
  });
});
