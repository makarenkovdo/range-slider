/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import FieldModel from '../../../src/model/FieldModel';
import Slider from '../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('setMinMax test', () => {
  const testSlider: Slider = new Slider('testId', {
    isRange: true,
  });
  const testField = new FieldModel('testId', testSlider.presenter);

  testField.setMinMax(14, 19);

  test('if function "setMinMax" set min=14', () => {
    expect(testField.minMax[0]).toBe(14);
  });
  test('if function "setMinMax" set max=19', () => {
    expect(testField.minMax[1]).toBe(19);
  });
});
