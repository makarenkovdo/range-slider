/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = ` 
 <div style="width: 500px; height: 500px; margin-bottom: 100px;">
   <div id="first" class="slider"></div>
 </div>
   `;
});

describe('runnerPresenter test', () => {
  const $field: JQuery<HTMLElement> = $('#first');
  let testedSlider = new SliderPresenter('first', {
    isTestMode: true,
  });
  testedSlider = new SliderPresenter('first', {
    minValue: 14,
    maxValue: 19,
  });

  test('if function "setMinMax" assign values to field/view keys', () => {
    expect(testedSlider['field'].minMax[0]).toBe(14);
    expect(testedSlider['field'].minMax[1]).toBe(19);
    expect(testedSlider['view'].minMax[0]).toBe(14);
    expect(testedSlider['view'].minMax[1]).toBe(19);
  });
});
