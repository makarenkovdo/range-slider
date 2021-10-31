/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { prepareRunnerArgs } from '../../../src/view/viewModules/createRunner/createRunnerUtility';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('if function "prepareRunnerArgs" return values', () => {
  test('must return 0', () => {
    expect(prepareRunnerArgs(0, false)).toHaveProperty('i', 0);
  });
  test('must return left', () => {
    expect(prepareRunnerArgs(0, false)).toHaveProperty('positioning', 'left');
  });
  test('must return 100', () => {
    expect(prepareRunnerArgs(1, false)).toHaveProperty('minMax', 100);
  });
});
