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

  test('if function "createRunner" creating html-element', async () => {
    testView.runner.createRunner.call(this, 0);
    testView.runner.createRunner.call(this, 1);
    await waitFor(() => {
      expect(testView.runner.$elements[0]).not.toBeFalsy();
      expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
      expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
    });
  });
});
