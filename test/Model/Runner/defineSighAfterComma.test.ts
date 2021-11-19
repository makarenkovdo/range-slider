/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import RunnerModel from '../../../src/model/RunnerModel';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('RunnerModel test', () => {
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });
  const testRunner = new RunnerModel('testId', 0, testPresenter);

  testRunner.setStep(0.15, [0, 15]);
  test('defineSignAfterComma', () => {
    testRunner.defineSignAfterComma([0, 15]);
    expect(testRunner).toHaveProperty('step', 0.15);
    expect(testRunner).toHaveProperty('stepSignAfterComma', 2);
  });
});
