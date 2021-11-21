/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import { UpdateRunnerValuesArgs } from '../../../src/model/runnerModules/runnerInterfaces';
import Slider from '../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('test updateRunnerValues', () => {
  const testSlider = new Slider('testId', {
  });
  const updateRunnerValuesArgsTest: UpdateRunnerValuesArgs = {
    cursorXY: [20, 50],
    isVertical: false,
    minMax: [0, 100],
    isRange: false,
    fieldSize: [100, 200],
    runners: testSlider.presenter['runners'],
    activeRunner: testSlider.presenter['runners'][0],
  };
  const recieveModelLogic = jest.fn();
  testSlider.presenter.recieveModelLogic = recieveModelLogic;

  test("must call subscriber's-method through the notifier", () => {
    testSlider.presenter['runners'][0].updateRunnerValues(updateRunnerValuesArgsTest);
    expect(recieveModelLogic).toHaveBeenCalled();
  });
  test('must update position and stepValue', () => {
    testSlider.presenter['runners'][0].updateRunnerValues(updateRunnerValuesArgsTest);
    expect(testSlider.presenter['runners'][0]).toHaveProperty('positionInPercent', 20);
    expect(testSlider.presenter['runners'][0]).toHaveProperty('stepValue', 20);
  });
});
