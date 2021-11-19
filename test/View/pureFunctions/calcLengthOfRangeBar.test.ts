/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { calcLengthOfRangeBar } from '../../../src/view/bar/updateBarPosition/updateBarPositionUtility';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('if function "calcLengthOfRangeBar" return values', () => {
  test('must return 70', () => {
    expect(calcLengthOfRangeBar([10, 80])).toBe(70);
  });
});
