/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import checkValues from '../../../src/presenter/presenterModules/checkValues';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('testing events ', () => {
  document.body.innerHTML = `
  <div style="width: 500px; height: 500px; margin-bottom: 100px;">
    <div data-testid="testId" id="testId" class="slider">
    </div>
</div>
    `;
  const testPresenter = new SliderPresenter('testId', {});
  const notifySliderMoving = jest.fn();

  testPresenter['view'].runner.notifySliderMoving = notifySliderMoving;

  const onDrag = jest.fn();
  const createRangeSliderTestArgs = checkValues({});
  test('if build-function calls last method of builder-chain-of-calling', async () => {
    testPresenter['view'].runner.handleDrag = onDrag;
    testPresenter['addListeners'](createRangeSliderTestArgs, 'build');
    await waitFor(() => {
      expect(onDrag).toHaveBeenCalled();
    });
  });
});
