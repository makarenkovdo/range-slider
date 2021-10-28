/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from './SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('runnerController test', () => {
  const firstRunner = new SliderPresenter('first', {
    shouldAddTip: true,
    shouldAddBar: true,
    step: 0.1,
    minValue: 14,
    maxValue: 19,
    isRange: true,
  });
  test('if function "setMinvalue" set', () => {
    expect(firstRunner.field.minValue).toBe(14);
  });
  test('if function "setMaxValue" set', () => {
    expect(firstRunner.field.maxValue).toBe(19);
  });
  // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
});
