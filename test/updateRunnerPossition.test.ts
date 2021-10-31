/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderView from '../src/view/SliderView';
import SliderPresenter from '../src/presenter/SliderPresenter';

describe('RunnerModel test', () => {
  document.body.innerHTML = `
      <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
      `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {});
  const testView = new SliderView('testId', testPresenter);
  console.log('sdfsdfsdf', testView.$field);

  test('must setThisRunnerPosition and change html-left to 50', () => {
    testView.runnersPosition = [60, 100];
    testView.isRange = false;
    testView.isVertical = false;
    testView.updateRunnerPosition.call(this, 50, 0);
    expect(testView.runnersPosition[0]).toBe(50);
    const element = screen.getByTestId('test-runner-0');
    expect(element).toHaveStyle('left:50%');
    // expect($field.find('js-instance-0').css('left')).toBe('50%');
  });
});
