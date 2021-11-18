/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import SliderView from '../../../src/view/SliderView';
import { setThis } from '../../../src/view/runner/create/createUtility';

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
  test('must NOT be empty array', () => {
    setThis.call(testView, 0);
    expect(testView.runner.$elements[0]).not.toBeFalsy();
  });
});
