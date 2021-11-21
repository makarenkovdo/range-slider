/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderView from '../../../src/view/SliderView';
import Slider from '../../../src/Slider';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
  const testSlider = new Slider('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', testSlider.presenter);

  testView.initStartEnd(20, 60);
  test('if function initStartEnd set this minMax', () => {
    expect(testView.minMax[0]).toBe(20);
    expect(testView.minMax[1]).toBe(60);
  });
});
