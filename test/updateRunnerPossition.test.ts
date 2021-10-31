/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderView from '../src/view/SliderView';
import SliderPresenter from '../src/presenter/SliderPresenter';

describe('test function updateRunnerPosition', () => {
  document.body.innerHTML = `
      <div style="width: 500px" data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
      `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {});
  const testView = new SliderView('testId', testPresenter);
  testView.runnersPosition = [60, 100];
  testView.isRange = false;
  testView.isVertical = false;
  testView.fieldSize = [100, 100];
  testView.runnerSize = [40, 40];
  testView.updateRunnerPosition.call(this, 50, 0);
  test('must setThisRunnerPosition to 50', () => {
    expect(testView.runnersPosition[0]).toBe(50);
  });
  test('must set left to 50-((40/100)*50) = 30', () => {
    const element = screen.getByTestId('test-runner-0');
    expect(element).toHaveStyle('left:30%');
  });
});
