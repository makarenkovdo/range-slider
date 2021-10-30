/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../src/presenter/SliderPresenter';
import { CreateRangeSliderArgsType } from '../src/presenter/presenterInterfaces';
import RunnerModel from '../src/model/RunnerModel';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('first', {
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
});

// test('if function "setMinvalue" set', () => {
//   expect(testRunner.field.minValue).toBe(14);
// });
// test('if function "setMaxValue" set', () => {
//   expect(testRunner.field.maxValue).toBe(19);
// });
// expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
