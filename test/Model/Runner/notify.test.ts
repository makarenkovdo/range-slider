/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import SliderPresenter from '../../../src/presenter/SliderPresenter';
import RunnerModel from '../../../src/model/RunnerModel';

beforeEach(() => {
  document.body.innerHTML = `
     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
     `;
});

describe('if function "notify" call subscribers', () => {
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });

  const testRunner = new RunnerModel('testId', 0, testPresenter);

  const recieveModelLogic = jest.fn();
  const recieveRebuildData = jest.fn();
  testPresenter.recieveModelLogic = recieveModelLogic;
  testPresenter.recieveRebuildData = recieveRebuildData;
  test('must call fakeSubscriber to update', () => {
    testRunner.notifyToUpdate.call(this);
    expect(recieveModelLogic).toHaveBeenCalled();
  });
  test('must call fakeSubscriber to rebuild', () => {
    testRunner.notifyToRebuild.call(this);
    expect(recieveRebuildData).toHaveBeenCalled();
  });
});
