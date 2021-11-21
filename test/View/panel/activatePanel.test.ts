/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import DemoSlider from '../../../src/demo/DemoSlider';
import { BuildParams } from '../../../src/initializeTypes';

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
  const testedSlider = new DemoSlider('first', {});
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

  test('if functions selectPanelNodes/initializePanel set minmax', async () => {
    await waitFor(() => {
      expect(testedSlider.slider.presenter['view'].id).toBeDefined();
    });

    testedSlider['activatePanel'](createRangeSliderTestArgs);

    expect(testedSlider.panel.$maxValueInput).toBeDefined();
    expect(testedSlider.panel.minMax[0]).toBe(1);
    await waitFor(() => {
      const $maxValueInputNew: HTMLInputElement | null = testedSlider.panel.$maxValueInput;
      console.log('$maxValueInputNew', $maxValueInputNew);

      let maxValue:string | null = null;
      if ($maxValueInputNew) maxValue = $maxValueInputNew.value;
      if (maxValue) expect(maxValue).toBe('5');
    });
  });
  test('if functions selectPanelNodes/initializePanel set orientation', async () => {
    await waitFor(() => {
      expect(testedSlider.slider.presenter['view'].id).toBeDefined();
    });

    testedSlider['activatePanel'](createRangeSliderTestArgs);

    expect(testedSlider.panel.$orientationInput).toBeDefined();
    expect(testedSlider.panel.orientation).toBe('vertical');
    await waitFor(() => {
      const $orient: HTMLInputElement | null = testedSlider.panel.$orientationInput;
      let orientation:string | null = null;
      if ($orient) orientation = $orient.value;
      if (orientation) expect(orientation).toBe('on');
    });
  });
});
