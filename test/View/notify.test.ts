/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderView from '../../src/view/SliderView';
import SliderPresenter from '../../src/presenter/SliderPresenter';

describe('if function "notify" call subscribers', () => {
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });

  const recieveClickData = jest.fn();
  const recieveDragData = jest.fn();
  testPresenter.recieveClickData = recieveClickData;
  testPresenter.recieveDragData = recieveDragData;

  const testView = new SliderView('testId', testPresenter);
  test('must call fakeSubscriber', () => {
    testView.notifyFieldClick.call(this, [0, 100]);
    expect(recieveClickData).toHaveBeenCalled();
  });
  test('must call fakeSubscriber', () => {
    testView.runner.notifySliderMoving([0, 100], 0);
    expect(recieveDragData).toHaveBeenCalled();
  });
});
