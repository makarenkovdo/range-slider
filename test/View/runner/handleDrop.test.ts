/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Slider from '../../../src/Slider';

describe('testing events ', () => {
  document.body.innerHTML = `
  <div style="width: 500px; height: 500px; margin-bottom: 100px;">
  <div data-testid="testId" id="testId" class="slider"></div>
</div>
    `;
  const testSlider = new Slider('testId', {});
  const $field = $('#testId');
  const fakeOnDrop = jest.fn();
  testSlider.presenter['view'].runner.updateZIndex = fakeOnDrop;

  test('must toHaveBeenCalles when click', async () => {
    const notifySliderMoving = jest.fn();
    testSlider.presenter['view'].runner.notifySliderMoving = notifySliderMoving;
    await waitFor(() => {
      expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
    });
    $field.mousedown();
    $field.mouseup();

    await waitFor(() => {
      expect(fakeOnDrop).toHaveBeenCalled();
    });
  });
});
