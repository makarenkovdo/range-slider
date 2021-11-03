/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { prepareTipNumberArgs } from '../../../../src/view/viewModules/createTipNumber/createTipNumberUtility';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('if function "prepareTipArgs" return values', () => {
  test('must return 0', () => {
    expect(prepareTipNumberArgs(0, false)).toHaveProperty('i', 0);
  });
  test('must return left', () => {
    expect(prepareTipNumberArgs(0, false)).toHaveProperty('positioning', 'left');
  });
  test('must return 100', () => {
    expect(prepareTipNumberArgs(1, false)).toHaveProperty('minMax', 100);
  });
});
