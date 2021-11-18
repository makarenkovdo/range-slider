/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/dot-notation */

import '@testing-library/jest-dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';

describe('testing events ', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class="runner js-runner js-instance-0" id="js-runner"></div></div>
    `;
  const testPresenter = new SliderPresenter('testId', {});
  test('must toHaveBeenCalles when click', () => {
    const notifyFieldClick = jest.fn();
    testPresenter['view'].notifyFieldClick = notifyFieldClick;
    document.getElementById('testId').click();
    expect(notifyFieldClick).toHaveBeenCalled();
  });
});
