/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import FieldModel from '../../../src/model/FieldModel';
import SliderPresenter from '../../../src/presenter/SliderPresenter';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('RunnerModel test', () => {
  const testPresenter: SliderPresenter = new SliderPresenter('testId', {
    isRange: true,
  });
  const testField = new FieldModel('testId', testPresenter);
  test('if constructor create own properties', () => {
    expect(testField).toHaveProperty('isVertical', false);
    expect(testField).toHaveProperty('subscriber', testPresenter);
  });
});
