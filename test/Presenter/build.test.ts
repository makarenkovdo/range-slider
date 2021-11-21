/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BuildParamsBeforeChecking } from '../../src/presenter/presenterInterfaces';
import SliderPresenter from '../../src/presenter/SliderPresenter';

describe('if build-function calls methods', () => {
  document.body.innerHTML = `
  <div data-testid="testId" id="testId" class="slider"></div>
  `;
  const testedSlider = new SliderPresenter('testId', {});

  const createRangeSliderTestArgs: BuildParamsBeforeChecking = {
    isTestMode: false,
  };
  const createScale = jest.fn();
  test('if build-function calls last method of builder-chain-of-calling', () => {
    testedSlider['createScale'] = createScale;
    testedSlider['build'](createRangeSliderTestArgs);
    expect(createScale).toHaveBeenCalled();
  });
});

describe('if build params works', () => {
  document.body.innerHTML = `
  <div data-testid="testId" id="testId" class="slider"></div>
  `;
  const testedSlider = new SliderPresenter('testId', {
    orientation: 'vertical',
  });
  test('if build vertical slider', async () => {
    await waitFor(() => {
      expect(testedSlider['view'].$field.hasClass('js-slider_vertical')).toBe(true);
    });
  });
});
