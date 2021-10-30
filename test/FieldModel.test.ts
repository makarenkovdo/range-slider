/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import FieldModel from '../src/model/FieldModel';
import SliderPresenter from '../src/presenter/SliderPresenter';
import RunnerModel from '../src/model/RunnerModel';
import { DataForRunnerUpdatingArgsType } from '../src/presenter/presenterInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter: SliderPresenter = new SliderPresenter('first', {
    isRange: true,
  });
  const testField = new FieldModel('testId', testPresenter);
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

// expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
