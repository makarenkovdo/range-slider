/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('runnerController test', () => {
  const firstRunner = new SliderPresenter('first', {
    isTestMode: true,
  });
  test('constructor testing', () => {
    expect(firstRunner).toHaveProperty('runnerCounter', 0);
    expect(firstRunner).toHaveProperty('field.isVertical', false);
    expect(firstRunner).toHaveProperty('runners');
    expect(firstRunner).toHaveProperty('view');
    expect(firstRunner).not.toHaveProperty('runners[1]');
  });

  test('if function "createRunner" creating html-element', () => {
    const firstRunner = new SliderPresenter('first', {
      shouldAddTip: true,
      shouldAddBar: true,
      step: 0.1,
      maxValue: 17,
      isRange: true,
    });
    // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
    expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
  });
});

// test('if function "setMinvalue" set', () => {
//   expect(firstRunner.field.minValue).toBe(14);
// });
// test('if function "setMaxValue" set', () => {
//   expect(firstRunner.field.maxValue).toBe(19);
// });
// expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
