/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { calculateStepValueAndPosition } from '../../../src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility';
import { CalculateStepValueAndPositionArgs } from '../../../src/model/runnerModules/runnerInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('calculateValue test', () => {
  test('calculateValue', () => {
    const CalculateStepValueAndPositionArgsTest: CalculateStepValueAndPositionArgs = {
      positionInPercent: 23,
      step: 2,
      value: 23,
      stepSignAfterComma: 0,
    };

    expect(calculateStepValueAndPosition(CalculateStepValueAndPositionArgsTest)).toHaveProperty(
      'stepPosition',
      24,
    );

    expect(calculateStepValueAndPosition(CalculateStepValueAndPositionArgsTest)).toHaveProperty(
      'stepValue',
      24,
    );
  });
});
