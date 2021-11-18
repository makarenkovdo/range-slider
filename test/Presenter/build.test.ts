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

describe('if build-function calls methods', () => {
  const testedSlider = new SliderPresenter('first', {});

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
