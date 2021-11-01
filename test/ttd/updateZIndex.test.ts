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

  test('must set z-index of active runner to 1', () => {
    testView.updateRunnerPosition.call(this, 50, 0);
    expect($field.find('.js-slider-bar').css('z-index')).toBe('1');
    expect($field.find('.js-slider-bar').css('z-index')).toBe('0');
  });
  test('must set z-index of active runner to 1', () => {
    testView.updateRunnerPosition.call(this, 50, 0);
    const element0 = screen.getByTestId('test-runner-0');
    expect(element0).toHaveStyle('z-index:1');
    const element1 = screen.getByTestId('test-runner-1');
    expect(element1).toHaveStyle('z-index:0');
  });
  test('must set z-index of active runner to 1', () => {
    testView.updateRunnerPosition.call(this, 50, 1);
    const element0 = screen.getByTestId('test-runner-0');
    expect(element0).toHaveStyle('z-index:0');
    const element1 = screen.getByTestId('test-runner-1');
    expect(element1).toHaveStyle('z-index:1');
  });
});
