/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import RunnerModel from '../../../src/model/RunnerModel';
import Slider from '../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('RunnerModel test', () => {
  const testSlider = new Slider('testId', {
    isTestMode: true,
  });
  const testRunner = new RunnerModel('testId', 0, testSlider.presenter);

  testRunner.setStep(0.15, [0, 15]);
  test('if set step', () => {
    expect(testRunner).toHaveProperty('step', 0.15);
  });
});
