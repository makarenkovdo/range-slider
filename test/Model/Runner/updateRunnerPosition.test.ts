/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import { UpdateRunnerValuesArgs } from '../../../src/model/runnerModules/runnerInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('test updateRunnerValues', () => {
  const testPresenter = new SliderPresenter('testId', {
  });
  // const testRunner = new RunnerModel('testId', 0, testPresenter);
  const updateRunnerValuesArgsTest: UpdateRunnerValuesArgs = {
    cursorXY: [20, 50],
    isVertical: false,
    minMax: [0, 100],
    isRange: false,
    fieldSize: [100, 200],
    runners: testPresenter['runners'],
    activeRunner: testPresenter['runners'][0],
  };
  const recieveModelLogic = jest.fn();
  testPresenter.recieveModelLogic = recieveModelLogic;

  test("must call subscriber's-method through the notifier", () => {
    testPresenter['runners'][0].updateRunnerValues(updateRunnerValuesArgsTest);
    expect(recieveModelLogic).toHaveBeenCalled();
  });
  test('must update position and stepValue', () => {
    testPresenter['runners'][0].updateRunnerValues(updateRunnerValuesArgsTest);
    expect(testPresenter['runners'][0]).toHaveProperty('positionInPercent', 20);
    expect(testPresenter['runners'][0]).toHaveProperty('stepValue', 20);
  });
});
