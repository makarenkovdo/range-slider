/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/dom';
import { setThis } from '../../../src/view/runner/create/createUtility';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import SliderView from '../../../src/view/SliderView';

describe('if function "setThis" set this.$runners', () => {
  document.body.innerHTML = `
         <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class=".js-runner"></div></div>
         `;
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });

  const testView = new SliderView('testId', testPresenter);
  test('before setThis.call must be empty array', () => {
    expect(testView.runner.$elements[0]).toBeFalsy();
  });
  test('must NOT be empty array', async () => {
    setThis.call(testView, 0);
    await waitFor(() => {
      expect(testView.runner.$elements[0]).not.toBeFalsy();
    });
  });
});
