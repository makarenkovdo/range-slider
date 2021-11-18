/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import {
  screen, waitFor,
} from '@testing-library/dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import create from '../../../src/view/scale/create';

describe('createScale test', () => {
  document.body.innerHTML = `
 <div style="width: 700px; margin-bottom: 100px;">
 <div style="width: 500px;" data-testid="testId" id="testId" class="slider"></div>
 </div>
 `;

  jest.setTimeout(10000);

  test("div with 'testId' toBeInTheDocument", async () => {
    const testPresenter = new SliderPresenter('testId', { isRange: true });
    create.call(testPresenter['view']);
    await waitFor(() => {
      expect(screen.getByTestId('test-scale')).toBeInTheDocument();
    });
  });
});
