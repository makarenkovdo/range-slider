/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderView from '../../src/view/SliderView';
import SliderPresenter from '../../src/presenter/SliderPresenter';

describe('ViewModel test', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('if view-constructor create new instance', () => {
    expect(testView.id).toBe('testId');
  });
});
