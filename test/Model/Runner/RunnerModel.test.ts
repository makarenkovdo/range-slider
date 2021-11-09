/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import RunnerModel from '../../../src/model/RunnerModel';
import { UpdateRunnerValuesArgs } from '../../../src/model/runnerModules/runnerInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testRunner = new RunnerModel('testId', 0, testPresenter);
  test('constructor testing', () => {
    expect(testRunner).toHaveProperty('instance', 0);
    expect(testRunner).not.toHaveProperty('id');
  });
  describe('step and sign', () => {
    testRunner.setStep(0.15);
    test('set step', () => {
      expect(testRunner).toHaveProperty('step', 0.15);
    });
    test('defineSignAfterComma', () => {
      testRunner.defineSignAfterComma();
      expect(testRunner).toHaveProperty('step', 0.15);
      expect(testRunner).toHaveProperty('stepSignAfterComma', 2);
    });
  });
  test('updateRunnerValues', () => {
    const updateRunnerValuesArgsTest: UpdateRunnerValuesArgs = {
      cursorXY: [20, 50],
      isVertical: false,
      minMax: [0, 100],
      isRange: false,
      fieldSize: [100, 200],
      runners: [testRunner],
      activeRunner: testRunner,
    };
    testRunner.setStep(1);
    testRunner.updateRunnerValues(updateRunnerValuesArgsTest);
    expect(testRunner).toHaveProperty('positionInPercent', 20);
    expect(testRunner).toHaveProperty('stepValue', 20);
  });
});

describe('if function "notify" call subscribers', () => {
  const testPresenter = new SliderPresenter('testId', {
    // shouldAddTip: true,
    isTestMode: true,
  });

  const testRunner = new RunnerModel('testId', 0, testPresenter);

  const recieveModelLogic = jest.fn();
  testPresenter.recieveModelLogic = recieveModelLogic;

  test('must call fakeSubscriber', () => {
    testRunner.notify.call(this);
    expect(recieveModelLogic).toHaveBeenCalled();
  });
});
