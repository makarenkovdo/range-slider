/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BuildParams } from '../../src/initializeTypes';
import checkValues from '../../src/presenter/presenterModules/checkValues';
import Slider from '../../src/Slider';

describe('if build-function calls methods', () => {
  document.body.innerHTML = `
  <div data-testid="testId" id="testId" class="slider"></div>
  `;
  const testedSlider = new Slider('testId', {});

  const createRangeSliderTestArgs: BuildParams = checkValues({});
  const createScale = jest.fn();
  test('if build-function calls last method of builder-chain-of-calling', () => {
    testedSlider.presenter['createScale'] = createScale;
    testedSlider.presenter['build'](createRangeSliderTestArgs);
    expect(createScale).toHaveBeenCalled();
  });
});

describe('if build params works', () => {
  document.body.innerHTML = `
  <div data-testid="testId" id="testId" class="slider"></div>
  `;
  const testedSlider = new Slider('testId', {
    orientation: 'vertical',
  });
  test('if build vertical slider', async () => {
    await waitFor(() => {
      expect(testedSlider.presenter['view'].$field.hasClass('js-slider_vertical')).toBe(true);
    });
  });
});
