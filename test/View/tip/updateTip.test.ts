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
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {
    // shouldAddTip: true,
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('if function updateTipNumber update html content', () => {
    const updateTipTestArgs = { stepValue: 70, instance: 0 };
    testView.tip.update.call(this, updateTipTestArgs);
    const element = screen.getByTestId('test-tip-number-0');
    expect(element).toHaveTextContent('70');
    expect($field.find('.js-instance-0 span').text()).toBe('70');
  });
});
