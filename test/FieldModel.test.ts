/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { CreateRangeSliderArgsType } from './presenter/presenterInterfaces';
import RunnerModel from './model/RunnerModel';
import FieldModel from '../src/model/FieldModel';
import SliderPresenter from '../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter: SliderPresenter = new SliderPresenter('first', {
    isTestMode: true,
  });
  const testField = new FieldModel('testId', testPresenter);
  testField.setMinMax(14, 19);

  test('if function "setMinMax" set min=14', () => {
    expect(testField.minMax[0]).toBe(14);
  });
  test('if function "setMinMax" set max=19', () => {
    expect(testField.minMax[1]).toBe(19);
  });
});

// expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
