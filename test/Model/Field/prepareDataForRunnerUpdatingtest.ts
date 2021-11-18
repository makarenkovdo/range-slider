/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import FieldModel from '../../../src/model/FieldModel';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import { DataForRunnerUpdatingArgsType } from '../../../src/presenter/presenterInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const testPresenter: SliderPresenter = new SliderPresenter('testId', {
    isRange: true,
  });
  const testField = new FieldModel('testId', testPresenter);
  test('constructor create own property isVertical', () => {
    expect(testField).toHaveProperty('isVertical', false);
  });

  describe('test actions after the onClickHandler', () => {
    const testArgs: DataForRunnerUpdatingArgsType = {
      runnersPosition: [0, 100],
      isVertical: false,
      minMax: [0, 100],
      isRange: true,
      fieldSize: [100, 50],
      cursorXY: [80, 25],
      runners: testPresenter['runners'],
    };
    const recieveModelLogic = jest.fn();
    testPresenter.recieveModelLogic = recieveModelLogic;
    test("must call subscriber's-method through the notifier", () => {
      testPresenter['field'].prepareDataForRunnerUpdating(testArgs);
      expect(recieveModelLogic).toHaveBeenCalled();
    });
    test('if prepareDataForRunnerUpdating define nearest runner and assign this.stepPosition ', () => {
      testPresenter['field'].prepareDataForRunnerUpdating(testArgs);
      expect(testPresenter['runners'][1].stepPosition).toBe(80);
    });
  });
});
