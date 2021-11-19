/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('testing events ', () => {
  document.body.innerHTML = `
  <div style="width: 500px; height: 500px; margin-bottom: 100px;">
  <div data-testid="testId" id="testId" class="slider"></div>
</div>
    `;
  const testPresenter = new SliderPresenter('testId', {});
  const $field = $('#testId');
  const fakeOnDrop = jest.fn();
  testPresenter['view'].runner.updateZIndex = fakeOnDrop;

  test('must toHaveBeenCalles when click', async () => {
    const notifySliderMoving = jest.fn();
    testPresenter['view'].runner.notifySliderMoving = notifySliderMoving;
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
