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
  const $field: JQuery<HTMLElement> = $('#testId');

  const testSlider = new Slider('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', testSlider.presenter);
  testView.$field = $field;

  test('if function "createBar" creating html-element', async () => {
    testView.bar.createBar.call(testView.bar, 6);
    await waitFor(() => {
      expect(screen.getByTestId('test-slider-bar')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(testView.bar.$bar).not.toBeFalsy();
    });
  });
});
