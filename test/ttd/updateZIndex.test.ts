/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';
import SliderView from '../../src/view/SliderView';

describe('updateZIndex TDD-test', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', { isRange: true });
  const testView = new SliderView('testId', testPresenter);

  test('must set z-index of active runner to 2', () => {
    testView.updateRunnerPosition.call(this, 50, 0);
    testView.updateZIndex(0);
    console.log(testView.$runners);

    // const element0 = screen.getByTestId('test-runner-0');
    // expect(element0).toHaveClass('current');
  });
  test('must set z-index of active runner to 2', () => {
    testView.updateRunnerPosition.call(this, 50, 1);
    testView.updateZIndex(1);
    // const element1 = screen.getByTestId('test-runner-1');
    // expect(element1).toHaveClass('current');
  });
});
