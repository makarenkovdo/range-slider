/**
 * @jest-environment jsdom
 */
import { screen, waitFor } from '@testing-library/dom';
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
  testView.bar.createBar(6);

  test('if function updateBarPosition update width of horizontal range slider', async () => {
    testView.runner.positions = [20, 80];
    testView.isRange = true;
    testView.bar.updateBarPosition.call(testView.bar);
    await waitFor(() => {
      const bar = screen.getByTestId('test-slider-bar');
      expect(bar).toHaveStyle('width: 60%');
    });
  });
  test('if function updateBarPosition update height of vertical slider', async () => {
    testView.runner.positions = [60, 100];
    testView.isRange = false;
    testView.isVertical = true;
    testView.bar.updateBarPosition.call(testView.bar);
    await waitFor(() => {
      const bar = screen.getByTestId('test-slider-bar');
      expect(bar).toHaveStyle('height: 60%');
    });
  });
});
