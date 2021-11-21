/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import checkValues from '../../../src/presenter/presenterModules/checkValues';
import Slider from '../../../src/Slider';

describe('testing events ', () => {
  document.body.innerHTML = `
  <div style="width: 500px; height: 500px; margin-bottom: 100px;">
    <div data-testid="testId" id="testId" class="slider">
    </div>
</div>
    `;
  const testSlider = new Slider('testId', {});
  const notifySliderMoving = jest.fn();

  testSlider.presenter['view'].runner.notifySliderMoving = notifySliderMoving;

  const onDrag = jest.fn();
  const createRangeSliderTestArgs = checkValues({});
  test('if build-function calls last method of builder-chain-of-calling', async () => {
    testSlider.presenter['view'].runner.handleDrag = onDrag;
    testSlider.presenter['addListeners'](createRangeSliderTestArgs, 'build');
    await waitFor(() => {
      expect(onDrag).toHaveBeenCalled();
    });
  });
});
