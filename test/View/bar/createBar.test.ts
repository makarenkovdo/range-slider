/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderView from '../../../src/view/SliderView';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
  const testPresenter = new SliderPresenter('testId', {
    // shouldAddTip: true,
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('if function "createBar" creating html-element', () => {
    testView.bar.createBar.call(this);
    expect(testView.bar.$bar).not.toBeFalsy();
    expect(screen.getByTestId('test-slider-bar')).toBeInTheDocument();
  });
});
