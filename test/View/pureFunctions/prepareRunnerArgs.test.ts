/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { prepareRunnerArgs } from '../../../src/view/runner/create/createUtility';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('if function "prepareRunnerArgs" return values', () => {
  test('must return 0', () => {
    expect(prepareRunnerArgs(0, false, [12, 12], [500, 500], 50)).toHaveProperty('i', 0);
  });
  test('must return left', () => {
    expect(prepareRunnerArgs(0, false, [12, 12], [500, 500], 50)).toHaveProperty('positioning', 'left');
  });
  test('must return 100', () => {
    expect(prepareRunnerArgs(1, false, [12, 12], [500, 500], 50)).toHaveProperty('minMax', 100);
  });
});
