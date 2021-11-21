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
  const testedSlider = new SliderPresenter('first', {
    isTestMode: true,
  });

  const createRangeSliderTestArgs: PresenterBuildParams = {
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
    testedSlider['createRangeSlider'](createRangeSliderTestArgs);
    expect(testedSlider['view'].isRange).toBe(false);
  });

  test('if createRangeSlider runs if/else block', () => {
    createRangeSliderTestArgs.isRange = true;
    testedSlider['createRangeSlider'](createRangeSliderTestArgs);
    expect(testedSlider['view'].isRange).toBe(true);
  });

  test('if createRangeSlider calls functions', () => {
    const createRunnerView = jest.fn();
    const createRunner = jest.fn();
    const createTipNumber = jest.fn();
    testedSlider['createRunnerView'] = createRunnerView;
    testedSlider['createRunner'] = createRunner;
    testedSlider['createTipNumber'] = createTipNumber;
    testedSlider['createRangeSlider'](createRangeSliderTestArgs);
    expect(createRunnerView).toHaveBeenCalled();
    expect(createRunner).toHaveBeenCalled();
    expect(createTipNumber).toHaveBeenCalled();
  });
});
