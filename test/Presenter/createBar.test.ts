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

  test('if createBar runs', () => {
    expect(testedSlider.presenter['view'].hasBar).toBe(false);
    createRangeSliderTestArgs.shouldAddBar = true;
    testedSlider.presenter['createBar'](createRangeSliderTestArgs);
    expect(testedSlider.presenter['view'].hasBar).toBe(true);
  });
  test('if createBar call view.methods', () => {
    const createBarMock = jest.fn();
    const updateBarMock = jest.fn();
    testedSlider.presenter['view'].bar.createBar = createBarMock;
    testedSlider.presenter['view'].bar.updateBarPosition = updateBarMock;
    createRangeSliderTestArgs.shouldAddBar = true;
    testedSlider.presenter['createBar'](createRangeSliderTestArgs);
    expect(createBarMock).toHaveBeenCalled();
    expect(updateBarMock).toHaveBeenCalled();
  });
});
