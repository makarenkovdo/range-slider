/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { defineRunnerType } from '../../../src/view/runner/updatePosition/updatePositionUtility';

beforeEach(() => {
  document.body.innerHTML = `
      <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
      `;
});

describe('if function "defineRunnerType" return object properties', () => {
  test('must return 70', () => {
    expect(defineRunnerType(false, 90, 0)).toHaveProperty('instance', 0);
    expect(defineRunnerType(false, 90, 0)).toHaveProperty('stepPosition', 90);
  });
});
