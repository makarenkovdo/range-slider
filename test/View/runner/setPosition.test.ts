/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import SliderView from '../../../src/view/SliderView';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
  const testPresenter = new SliderPresenter('testId', {
    // shouldAddTip: true,
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('must setThisRunnerPosition to 50', async () => {
    testView.runner.positions = [60, 100];
    testView.isRange = false;
    testView.isVertical = false;
    testView.fieldSize = [100, 100];
    testView.runner.size = [40, 40];
    testView.runner.updatePosition.call(this, 50, 0);
    await waitFor(() => {
      expect(testView.runner.positions[0]).toBe(50);
      const element = screen.getByTestId('test-runner-0');
      // must set left to 50-((40/100)*50) = 30
      expect(element).toHaveStyle('left:30%');
    });
  });
});
