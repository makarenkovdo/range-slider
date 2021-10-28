/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderController from './slider-controller';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-slider horizontal" data-start="0"></div>
    `;
});

describe('sliderController test', () => {
  const firstSlider = new SliderController('first', {
    shouldAddTip: true,
    shouldAddBar: true,
    step: 0.1,
    minValue: 14,
    maxValue: 19,
    isRange: true,
  });
  test('if function "setMinvalue" set', () => {
    expect(firstSlider.field.minValue).toBe(14);
  });
  test('if function "setMaxValue" set', () => {
    expect(firstSlider.field.maxValue).toBe(19);
  });
  // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
});
