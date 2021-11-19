/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { calculateStepValueAndPosition } from '../../../../src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility';
import { CalculateStepValueAndPositionArgs } from '../../../../src/model/runnerModules/runnerInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('calculateValue test', () => {
  test('must return stepValue and stepPosition', () => {
    const CalculateStepValueAndPositionArgsTest: CalculateStepValueAndPositionArgs = {
      positionInPercent: 23,
      step: 2,
      stepInPercent: 20,
      value: 23,
      stepSignAfterComma: 0,
    };

    expect(calculateStepValueAndPosition(
      CalculateStepValueAndPositionArgsTest,
      [0, 10],
    )).toHaveProperty(
      'stepPosition',
      20,
    );

    expect(calculateStepValueAndPosition(
      CalculateStepValueAndPositionArgsTest,
      [0, 10],
    )).toHaveProperty(
      'stepValue',
      2,
    );
  });
});
