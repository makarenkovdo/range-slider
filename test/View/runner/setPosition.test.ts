/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import Slider from '../../../src/Slider';

describe('ViewModel setPosition test', () => {
  document.body.innerHTML = `
     <div style="width: 500px; height: 500px; margin-bottom: 100px;">
     <div data-testid="testId" id="testId" class="slider"></div>
   </div>
     `;
  const testSlider = new Slider('testId', {});
  testSlider.presenter['view'].runner.positions = [60, 100];
  testSlider.presenter['view'].isRange = false;
  testSlider.presenter['view'].isVertical = false;
  testSlider.presenter['view'].fieldSize = [100, 100];
  testSlider.presenter['view'].runner.size = [40, 40];
  test('must setThisRunnerPosition to 50', async () => {
    await waitFor(() => {
      expect(testSlider.presenter['view'].runner.$elements[0]).not.toBeFalsy();
    });
  });

  test('must setThisRunnerPosition to 35px', async () => {
    testSlider.presenter['view'].fieldSize = [100, 100];
    testSlider.presenter['view'].runner.updatePosition.call(testSlider.presenter['view'].runner, 50, 0);
    expect(testSlider.presenter['view'].runner.positions[0]).toBe(50);
    await waitFor(() => {
      const element = screen.getByTestId('test-runner-0');
      expect(element).toHaveStyle('left: 35px');
    });
  });
});
