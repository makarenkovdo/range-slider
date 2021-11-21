/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderView from '../../src/view/SliderView';
import Slider from '../../src/Slider';

describe('if function "notify" call subscribers', () => {
  const testSlider = new Slider('testId', {
    isTestMode: true,
  });

  const recieveClickData = jest.fn();
  const recieveDragData = jest.fn();
  testSlider.presenter.recieveClickData = recieveClickData;
  testSlider.presenter.recieveDragData = recieveDragData;

  const testView = new SliderView('testId', testSlider.presenter);
  test('must call fakeSubscriber', () => {
    testView.notifyFieldClick.call(this, [0, 100]);
    expect(recieveClickData).toHaveBeenCalled();
  });
  test('must call fakeSubscriber', () => {
    testView.runner.notifySliderMoving([0, 100], 0);
    expect(recieveDragData).toHaveBeenCalled();
  });
});
