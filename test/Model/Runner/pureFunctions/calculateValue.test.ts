/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import RunnerModel from '../../../../src/model/RunnerModel';
import { calculateValue } from '../../../../src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility';
import Slider from '../../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('calculateValue test', () => {
  const testSlider = new Slider('first', {
    isTestMode: true,
  });
  const testRunner = new RunnerModel('testId', 0, testSlider.presenter);
  test('calculateValue', () => {
    const minMax = [0, 50];
    const thisRunner: RunnerModel = testRunner;
    thisRunner.positionInPercent = 20;
    expect(calculateValue(minMax, thisRunner)).toBe(10);
  });
});
