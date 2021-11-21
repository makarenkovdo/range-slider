/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import SliderView from '../../../src/view/SliderView';
import Slider from '../../../src/Slider';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
  const testSlider = new Slider('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', testSlider.presenter);

  test('if function "createRunner" creating html-element', async () => {
    testView.runner.createRunner(0, 0, 0);
    testView.runner.createRunner(1, 100, 0);
    await waitFor(() => {
      expect(testView.runner.$elements[0]).not.toBeFalsy();
      expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
      expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
    });
  });
});
