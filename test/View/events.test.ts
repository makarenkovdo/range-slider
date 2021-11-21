/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import Slider from '../../src/Slider';

describe('testing events ', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class="runner js-runner js-instance-0" id="js-runner"></div></div>
    `;
  const testSlider = new Slider('testId', {});
  test('must toHaveBeenCalles when click', () => {
    const notifyFieldClick = jest.fn();
    testSlider.presenter['view'].notifyFieldClick = notifyFieldClick;
    const $testId:HTMLElement | null = document.querySelector('testId');
    if ($testId) {
      $testId.click();
    }
    expect(notifyFieldClick).toHaveBeenCalled();
  });
});
