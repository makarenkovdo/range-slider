/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../../presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
   <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
   `;
  const firstRunner = new SliderPresenter('first', {
    shouldAddTip: true,
    shouldAddBar: true,
    step: 0.1,
    maxValue: 17,
    isRange: true,
  });
});

describe('create runner test', () => {
  test('if function "createRunner" creating html-element', () => {
    // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
    expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
  });
});
