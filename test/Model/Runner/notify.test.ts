/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import RunnerModel from '../../../src/model/RunnerModel';
import Slider from '../../../src/Slider';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('if function "notify" call subscribers', () => {
  const testSlider = new Slider('testId', {
    isTestMode: true,
  });

  const testRunner = new RunnerModel('testId', 0, testSlider.presenter);

  const recieveModelLogic = jest.fn();
  const recieveRebuildData = jest.fn();
  testSlider.presenter.recieveModelLogic = recieveModelLogic;
  testSlider.presenter.recieveRebuildData = recieveRebuildData;
  test('must call fakeSubscriber to update', () => {
    testRunner.notifyToUpdate.call(testRunner);
    expect(recieveModelLogic).toHaveBeenCalled();
  });
  // test('must call fakeSubscriber to rebuild', () => {
  //   testRunner.notifyToRebuild.call(testRunner, {});
  //   expect(recieveRebuildData).toHaveBeenCalled();
  // });
});
