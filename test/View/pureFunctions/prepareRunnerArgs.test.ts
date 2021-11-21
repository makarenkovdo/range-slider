/**
 * @jest-environment jsdom
 */
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Slider from '../../../src/Slider';
import { prepareRunnerArgs } from '../../../src/view/runner/create/createUtility';
import SliderView from '../../../src/view/SliderView';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
});
const testSlider = new Slider('testId', {
  isTestMode: true,
});

const testView = new SliderView('testId', testSlider.presenter);
describe('if function "prepareRunnerArgs" return values', () => {
  test('must NOT be empty for next test', async () => {
    await waitFor(() => {
      expect(testView.runner.$elements).not.toBeFalsy();
    });
  });
  test('must return 0', () => {
    expect(prepareRunnerArgs(0, false, [12, 12], [500, 500], 50)).toHaveProperty('instance', 0);
  });
  test('must return left', () => {
    expect(prepareRunnerArgs(0, false, [12, 12], [500, 500], 50)).toHaveProperty('positioning', ['left', 'top']);
  });
});
