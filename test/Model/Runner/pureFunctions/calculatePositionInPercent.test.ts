/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import RunnerModel from '../../../../src/model/RunnerModel';
import { calculatePositionInPercent } from '../../../../src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility';
import Slider from '../../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('calculatePositionInPercent test', () => {
  const testSlider = new Slider('first', {
    isTestMode: true,
  });
  const testRunner = new RunnerModel('testId', 0, testSlider.presenter);
  test('must return positionInPercent ', () => {
    const isVertical = false;
    const thisRunner: RunnerModel = testRunner;
    const cursorXY: number[] = [0.2, 0.5];
    const fieldSize: number[] = [100, 200];
    expect(calculatePositionInPercent(isVertical, thisRunner, cursorXY, fieldSize)).toBe(0.2);
  });
});
