/**
 * @jest-environment jsdom
 */

/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import Slider from '../../../src/Slider';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="slider horizontal" data-start="0"></div>
     `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testSlider = new Slider('testId', {
    shouldAddTip: true,
  });
  const updateTipTestArgs = { stepValue: 2, instance: 0 };
  testSlider.presenter['view'].fieldSize = [100, 100];
  test('if function updateTipNumber update html content', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('test-tip-number-0')).toBeInTheDocument();
    });
  });

  test('if function updateTipNumber update html content', async () => {
    testSlider.presenter['view'].tip.update(updateTipTestArgs);
    await waitFor(() => {
      expect($field.find('.js-slider__tip_instance-0 span').text()).toBe('2');
    });
  });
});
