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
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('if function "createTipNumber" creating html-element', async () => {
    testView.tip.create.call(testView.tip, 0, false, 50, 50);
    await waitFor(() => {
      expect(screen.getByTestId('test-tip-number-0')).toBeInTheDocument();
    });
  });
});
