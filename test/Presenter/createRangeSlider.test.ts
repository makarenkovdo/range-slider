/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import { BuildParams } from '../../src/initializeTypes';
import Slider from '../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
 <div style="width: 500px; height: 500px; margin-bottom: 100px;">
   <div id="first" class="slider"></div>
 </div>
    `;
});

describe('Presenter test', () => {
  const testedSlider = new Slider('first', {
    isTestMode: true,
  });

  const createRangeSliderTestArgs: BuildParams = {
    isRange: false,
    shouldAddTip: true,
    runnerSize: [70, 70],
    minValue: 10,
    maxValue: 100,
    shouldAddScale: false,
    shouldAddBar: false,
    step: 1,
    fieldThickness: 6,
    runnersInstantPosition: [20, 50],
    orientation: 'horizontal',
  };

  test('if createRangeSlider runs', () => {
    testedSlider.presenter['createRangeSlider'](createRangeSliderTestArgs);
    expect(testedSlider.presenter['view'].isRange).toBe(false);
  });

  test('if createRangeSlider runs if/else block', () => {
    createRangeSliderTestArgs.isRange = true;
    testedSlider.presenter['createRangeSlider'](createRangeSliderTestArgs);
    expect(testedSlider.presenter['view'].isRange).toBe(true);
  });

  test('if createRangeSlider calls functions', () => {
    const createRunnerView = jest.fn();
    const createRunner = jest.fn();
    const createTipNumber = jest.fn();
    testedSlider.presenter['createRunnerView'] = createRunnerView;
    testedSlider.presenter['createRunner'] = createRunner;
    testedSlider.presenter['createTipNumber'] = createTipNumber;
    testedSlider.presenter['createRangeSlider'](createRangeSliderTestArgs);
    expect(createRunnerView).toHaveBeenCalled();
    expect(createRunner).toHaveBeenCalled();
    expect(createTipNumber).toHaveBeenCalled();
  });
});
