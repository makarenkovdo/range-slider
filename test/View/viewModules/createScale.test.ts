/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {
  screen, waitFor,
} from '@testing-library/dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import createScale from '../../../src/view/viewModules/createScale';

describe('createScale test', () => {
  document.body.innerHTML = `
 <div style="width: 700px; margin-bottom: 100px;">
 <div style="width: 500px;" data-testid="testId" id="testId" class="slider"></div>
 </div>
 `;

  jest.setTimeout(10000);

  test("div with 'testId' toBeInTheDocument", async () => {
    const testPresenter = new SliderPresenter('testId', { isRange: true });
    createScale.call(testPresenter.view);
    await waitFor(() => {
      expect(screen.getByTestId('test-scale')).toBeInTheDocument();
    });
  });
});
