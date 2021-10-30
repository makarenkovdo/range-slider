/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import {
  prepareRunnerArgs,
  setThis,
} from '../../../src/view/viewModules/createRunner/createRunnerUtility';
import SliderView from '../../../src/view/SliderView';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class=".js-runner"></div></div>
     `;
});

describe('if function "setThis" set this.$runners', () => {
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });

  const testView = new SliderView('testId', testPresenter);
  test('must be empty array', () => {
    expect(testView.$runners[0]).toBeFalsy();
  });
  test('must NOT be empty array', () => {
    setThis.call(testView, 0);
    expect(testView.$runners[0]).not.toBeFalsy();
  });
});
