/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import SliderPresenter from '../../../../src/presenter/SliderPresenter';
import { checkCollision } from '../../../../src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('checkCollision test', () => {
  const testPresenter = new SliderPresenter('first', {
    isRange: true,
  });
  const stepElement = { stepPosition: 50, stepValue: 50 };
  const runner = testPresenter['runners'];
  const thisRunner = testPresenter['runners'][1];
  const isVertical = false;

  test('new stepPosition mustnot be < than runner[0].stepPosition ', () => {
    testPresenter['runners'][0].stepPosition = 30;

    expect(checkCollision(stepElement, runner, thisRunner, isVertical)).toHaveProperty(
      'stepPosition',
      50,
    );
  });
  test('new stepPosition mustnot be < than runner[0].stepPosition', () => {
    testPresenter['runners'][0].stepPosition = 60;

    expect(checkCollision(stepElement, runner, thisRunner, isVertical)).toHaveProperty(
      'stepPosition',
      60,
    );
  });
});
