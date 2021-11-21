/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unused-vars */

import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/dom';
import Slider from '../../../src/Slider';

describe('createScale test', () => {
  document.body.innerHTML = `
 <div style="width: 700px; margin-bottom: 100px;">
 <div style="width: 500px;" data-testid="testId" id="testId" class="slider"></div>
 </div>
 `;

  test("div with 'testId' toBeInTheDocument", async () => {
    const testSlider = new Slider('testId', { isRange: true, shouldAddScale: true });
    await waitFor(() => {
      const $scale = document.querySelector('.slider__scale-line');
      expect(!!$scale).toBe(true);
    });
  });
});
