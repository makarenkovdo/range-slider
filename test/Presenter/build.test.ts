/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PresenterBuildParams } from '../../src/presenter/presenterInterfaces';
import SliderPresenter from '../../src/presenter/SliderPresenter';

describe('if build-function calls methods', () => {
  document.body.innerHTML = `
  <div data-testid="testId" id="testId" class="slider"></div>
  `;
  const testedSlider = new SliderPresenter('testId', {});

  const createRangeSliderTestArgs: PresenterBuildParams = {
    isTestMode: false,
  };
  const activatePanel = jest.fn();
  test('if build-function calls last method of builder-chain-of-calling', () => {
    testedSlider['activatePanel'] = activatePanel;
    testedSlider['build'](createRangeSliderTestArgs);
    expect(activatePanel).toHaveBeenCalled();
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
