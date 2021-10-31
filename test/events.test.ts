/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../src/presenter/SliderPresenter';

describe('testing events ', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class="runner js-runner js-instance-0" id="js-runner"></div></div>
    `;
  const $field: JQuery<HTMLElement> = $('#testId');

  const testPresenter = new SliderPresenter('testId', {});
  test('must toHaveBeenCalles when click', () => {
    const notifyFieldClick = jest.fn();
    testPresenter.view.notifyFieldClick = notifyFieldClick;
    document.getElementById('testId').click();
    expect(notifyFieldClick).toHaveBeenCalled();
  });
});
