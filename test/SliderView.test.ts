/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderView from '../src/view/SliderView';
import SliderPresenter from '../src/presenter/SliderPresenter';
import { setThis } from '../src/view/viewModules/createRunner/createRunnerUtility';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('RunnerModel test', () => {
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testView = new SliderView('testId', 0, testPresenter);

  test('if function "createRunner" creating html-element', () => {
    testView.createRunner.call(this, 0);
    testView.createRunner.call(this, 1);
    expect(testView.$runners[0]).not.toBeFalsy();
    $(document).ready(() => {
      const $foundRunner: JQuery<HTMLElement> = $field.find('.js-runner');
      expect($foundRunner).not.toBeFalsy();
    });

    // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    // expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
    // expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
  });
});
describe('if function "setThis" set this.$runners', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class=".js-runner"></div></div>
    `;
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
