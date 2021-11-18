/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('ViewModel setPosition test', () => {
  document.body.innerHTML = `
     <div style="width: 500px; height: 500px; margin-bottom: 100px;">
     <div data-testid="testId" id="testId" class="slider"></div>
   </div>
     `;
  const testPresenter = new SliderPresenter('testId', {});
  testPresenter['view'].runner.positions = [60, 100];
  testPresenter['view'].isRange = false;
  testPresenter['view'].isVertical = false;
  testPresenter['view'].fieldSize = [100, 100];
  testPresenter['view'].runner.size = [40, 40];
  test('must setThisRunnerPosition to 50', async () => {
    await waitFor(() => {
      expect(testPresenter['view'].runner.$elements[0]).not.toBeFalsy();
    });
  });

  test('must setThisRunnerPosition to 35px', async () => {
    testPresenter['view'].fieldSize = [100, 100];
    testPresenter['view'].runner.updatePosition.call(testPresenter['view'].runner, 50, 0);
    expect(testPresenter['view'].runner.positions[0]).toBe(50);
    await waitFor(() => {
      const element = screen.getByTestId('test-runner-0');
      expect(element).toHaveStyle('left: 35px');
    });
  });
});
