/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import { PresenterBuildParams } from '../../src/presenter/presenterInterfaces';
import SliderPresenter from '../../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
\ 
<div style="width: 500px; height: 500px; margin-bottom: 100px;">
  <div id="first" class="slider"></div>
</div>
    `;
});

describe('runnerPresenter test', () => {
  const $field: JQuery<HTMLElement> = $('#first');
  const testedSlider = new SliderPresenter('first', {
    isRange: false,
    shouldAddTip: true,
    runnerSize: [70, 70],
    minValue: 10,
    maxValue: 100,
  });

  const createRangeSliderTestArgs: PresenterBuildParams = {
    isRange: false,
    shouldAddTip: true,
    runnerSize: [70, 70],
    minValue: 10,
    maxValue: 100,
  };

  test('if createBar runs', () => {
    expect(testedSlider['view'].hasBar).toBe(false);
    createRangeSliderTestArgs.shouldAddBar = true;
    testedSlider['createBar'](createRangeSliderTestArgs);
    expect(testedSlider['view'].hasBar).toBe(true);
  });

  test('if updateTipNumber runs', () => {
    $(document).ready(() => {
      testedSlider['updateTipNumber'](70, 0);
      const textContent: string = $field.find('.js-instance-0 span').text();
      expect(textContent).toBe(70);
    });
  });
  test('if setStep set runner.step', () => {
    createRangeSliderTestArgs.step = 12;
    testedSlider['setStep'](createRangeSliderTestArgs);
    expect(testedSlider['runners'][0].step).toBe(12);
  });
});
