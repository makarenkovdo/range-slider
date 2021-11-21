/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import FieldModel from '../../../src/model/FieldModel';
import { DataForRunnerUpdatingArgsType } from '../../../src/presenter/presenterInterfaces';
import Slider from '../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('FieldModel test', () => {
  const testSlider: Slider = new Slider('testId', {
    isRange: true,
  });
  const testField = new FieldModel('testId', testSlider.presenter);
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
      runners: testSlider.presenter['runners'],
    };
    const recieveModelLogic = jest.fn();
    testSlider.presenter.recieveModelLogic = recieveModelLogic;
    test("must call subscriber's-method through the notifier", () => {
      testSlider.presenter['field'].prepareDataForRunnerUpdating(testArgs);
      expect(recieveModelLogic).toHaveBeenCalled();
    });
    test('if prepareDataForRunnerUpdating define nearest runner and assign this.stepPosition ', () => {
      testSlider.presenter['field'].prepareDataForRunnerUpdating(testArgs);
      expect(testSlider.presenter['runners'][1].stepPosition).toBe(80);
    });
  });
});
