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
    step: 12,
  };

  test('if setStep set runner.step', () => {
    testedSlider['setStep'](createRangeSliderTestArgs);
    expect(testedSlider['runners'][0].step).toBe(12);
  });
});
