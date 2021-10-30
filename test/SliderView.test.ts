/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderView from '../src/view/SliderView';
import SliderPresenter from '../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', 0, testPresenter);

  test('if function "createRunner" creating html-element', () => {
    testView.createRunner.call(this, 0);
    testView.createRunner.call(this, 1);
    test('constructor create own property isVertical', () => {
      expect(testField).toHaveProperty('$runners[0]');
      expect(testField).toHaveProperty('$runners[1]');
    });

    // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    // expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
    // expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
  });
});
