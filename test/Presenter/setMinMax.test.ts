/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */
import '@testing-library/jest-dom';
import Slider from '../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = ` 
 <div style="width: 500px; height: 500px; margin-bottom: 100px;">
   <div id="first" class="slider"></div>
 </div>
   `;
});

describe('Presenter test', () => {
  let testedSlider = new Slider('first', {
    isTestMode: true,
  });
  testedSlider = new Slider('first', {
    minValue: 14,
    maxValue: 19,
  });

  test('if function "setMinMax" assign values to field/view keys', () => {
    expect(testedSlider.presenter['field'].minMax[0]).toBe(14);
    expect(testedSlider.presenter['field'].minMax[1]).toBe(19);
    expect(testedSlider.presenter['view'].minMax[0]).toBe(14);
    expect(testedSlider.presenter['view'].minMax[1]).toBe(19);
  });
});
