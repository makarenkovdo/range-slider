/**
 * @jest-environment jsdom
 */

/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import SliderView from '../../../src/view/SliderView';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

describe('ViewModel test', () => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="slider horizontal" data-start="0"></div>
     `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {
    shouldAddTip: true,
  });
  const testView = new SliderView('testId', testPresenter);
  const updateTipTestArgs = { stepValue: 2, instance: 0 };
  testPresenter['view'].fieldSize = [100, 100];
  // test('if function updateTipNumber update html content', async () => {
  //   await waitFor(() => {
  //     expect(screen.getByTestId('test-tip-number-0')).toBeInTheDocument();
  //   });
  // });
  test('if function updateTipNumber update html content', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('test-tip-number-0')).toBeInTheDocument();
    });
  });

  // test('some test title', async () => {
  //   testPresenter['view'].tip.update(updateTipTestArgs);

  //   await new Promise((r) => setTimeout(r, 3000));
  //   expect($field.find('.js-slider__tip_instance-0 span').text()).toBe('2');
  // });
  test('if function updateTipNumber update html content', async () => {
    testPresenter['view'].tip.update(updateTipTestArgs);

    const element = screen.getByTestId('test-tip-number-0');

    await waitFor(() => {
      expect($field.find('.js-slider__tip_instance-0 span').text()).toBe('2');
    });
  });

  // test('if function updateTipNumber update html content', async () => {
  //   const element = screen.getByTestId('test-tip-number-0');
  //   await waitFor(() => {
  //     expect(element).toHaveTextContent('70');
  //     expect($field.find('.js-instance-0 span').text()).toBe('70');
  //   });
  // });
});
