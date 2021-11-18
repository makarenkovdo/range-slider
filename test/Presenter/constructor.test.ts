/**
 * @jest-environment jsdom
 */
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
  const testedSlider = new SliderPresenter('first', {
    isTestMode: true,
  });
  test('constructor testing', () => {
    expect(testedSlider).toHaveProperty('runnerCounter', 0);
    expect(testedSlider).toHaveProperty('field.isVertical', false);
    expect(testedSlider).toHaveProperty('runners');
    expect(testedSlider).toHaveProperty('view');
    expect(testedSlider).not.toHaveProperty('runners[1]');
  });
});
