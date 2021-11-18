/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderView from '../../../src/view/SliderView';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('if function updateBarPosition update width of horizontal range slider', () => {
    testView.runner.positions = [20, 80];
    testView.isRange = true;
    testView.bar.updateBarPosition.call(this);
    expect($field.find('.js-slider-bar').css('width')).toBe('60%');
  });
  test('if function updateBarPosition update height of vertical slider', () => {
    testView.runner.positions = [60, 100];
    testView.isRange = false;
    testView.isVertical = true;
    testView.bar.updateBarPosition.call(this);
    expect($field.find('.js-slider-bar').css('height')).toBe('60%');
  });
});
