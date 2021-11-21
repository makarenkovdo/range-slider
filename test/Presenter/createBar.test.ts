/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import { BuildParams } from '../../src/presenter/presenterInterfaces';
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
    expect(testedSlider['view'].hasBar).toBe(false);
    createRangeSliderTestArgs.shouldAddBar = true;
    testedSlider['createBar'](createRangeSliderTestArgs);
    expect(testedSlider['view'].hasBar).toBe(true);
  });
  test('if createBar call view.methods', () => {
    const createBarMock = jest.fn();
    const updateBarMock = jest.fn();
    testedSlider['view'].bar.createBar = createBarMock;
    testedSlider['view'].bar.updateBarPosition = updateBarMock;
    createRangeSliderTestArgs.shouldAddBar = true;
    testedSlider['createBar'](createRangeSliderTestArgs);
    expect(createBarMock).toHaveBeenCalled();
    expect(updateBarMock).toHaveBeenCalled();
  });
});
