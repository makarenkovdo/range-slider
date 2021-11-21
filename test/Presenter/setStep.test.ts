/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import { PresenterBuildParams } from '../../src/presenter/presenterInterfaces';
import SliderPresenter from '../../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
<div style="width: 500px; height: 500px; margin-bottom: 100px;">
  <div id="first" class="slider"></div>
</div>
    `;
});

describe('Presenter test', () => {
  const testedSlider = new SliderPresenter('first', {});

  const createRangeSliderTestArgs: PresenterBuildParams = {
    isRange: false,
    shouldAddTip: true,
    runnerSize: [70, 70],
    minValue: 10,
    maxValue: 100,
    shouldAddScale: false,
    shouldAddBar: false,
    step: 12,
    fieldThickness: 6,
    runnersInstantPosition: [20, 50],
    orientation: 'horizontal',
  };

  test('if setStep set runner.step', () => {
    testedSlider['setStep'](createRangeSliderTestArgs);
    expect(testedSlider['runners'][0].step).toBe(12);
  });
});
