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
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  testView.initStartEnd(20, 60);
  test('if function initStartEnd set this minMax', () => {
    expect(testView.minMax[0]).toBe(20);
    expect(testView.minMax[1]).toBe(60);
  });
});
