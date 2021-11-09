/**
 * @jest-environment jsdom
 */
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
  testField.setMinMax(14, 19);

  test('if function "setMinMax" set min=14', () => {
    expect(testField.minMax[0]).toBe(14);
  });
  test('if function "setMinMax" set max=19', () => {
    expect(testField.minMax[1]).toBe(19);
  });

  describe('test onClickHandler', () => {
    const testArgs: DataForRunnerUpdatingArgsType = {
      runnersPosition: [0, 100],
      isVertical: false,
      minMax: [0, 100],
      isRange: true,
      fieldSize: [100, 50],
      cursorXY: [80, 25],
      runners: testPresenter.runners,
    };
    test('if prepareDataForRunnerUpdating define nearest runner and assign this.stepPosition ', () => {
      testPresenter.field.prepareDataForRunnerUpdating(testArgs);
      expect(testPresenter.runners[1].stepPosition).toBe(80);
    });
  });
});
