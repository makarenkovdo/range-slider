/**
 * @jest-environment jsdom
 */
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
  const testedSlider = new Slider('first', {
    isTestMode: true,
  });
  test('constructor testing', () => {
    expect(testedSlider.presenter).toHaveProperty('runnerCounter', 0);
    expect(testedSlider.presenter).toHaveProperty('field.isVertical', false);
    expect(testedSlider.presenter).toHaveProperty('runners');
    expect(testedSlider.presenter).toHaveProperty('view');
    expect(testedSlider.presenter).not.toHaveProperty('runners[1]');
  });
});
