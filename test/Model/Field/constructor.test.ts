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

describe('RunnerModel test', () => {
  const testSlider: Slider = new Slider('testId', {
    isRange: true,
  });
  const testField = new FieldModel('testId', testSlider.presenter);
  test('if constructor create own properties', () => {
    expect(testField).toHaveProperty('isVertical', false);
    expect(testField).toHaveProperty('subscriber', testSlider.presenter);
  });
});
