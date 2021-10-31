/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderView from '../src/view/SliderView';
import SliderPresenter from '../src/presenter/SliderPresenter';
import { setThis } from '../src/view/viewModules/createRunner/createRunnerUtility';

describe('if function "setThis" set this.$runners', () => {
  document.body.innerHTML = `
      <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class=".js-runner"></div></div>
      `;
  const testPresenter = new SliderPresenter('testId', {
    isTestMode: true,
  });

  const testView = new SliderView('testId', testPresenter);
  test('before setThis.call must be empty array', () => {
    expect(testView.$runners[0]).toBeFalsy();
  });
  test('must NOT be empty array', () => {
    setThis.call(testView, 0);
    expect(testView.$runners[0]).not.toBeFalsy();
  });
});

describe('RunnerModel test', () => {
  document.body.innerHTML = `
    <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
    `;
  const $field: JQuery<HTMLElement> = $('#testId');
  const testPresenter = new SliderPresenter('testId', {
    // shouldAddTip: true,
    isTestMode: true,
  });
  const testView = new SliderView('testId', testPresenter);

  test('if function "createRunner" creating html-element', () => {
    testView.createRunner.call(this, 0);
    testView.createRunner.call(this, 1);
    expect(testView.$runners[0]).not.toBeFalsy();
    expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
    expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
  });

  test('if function "createBar" creating html-element', () => {
    testView.createBar.call(this);
    expect(testView.$bar).not.toBeFalsy();
    expect(screen.getByTestId('test-slider-bar')).toBeInTheDocument();
  });

  test('if function "createTipNumber" creating html-element', () => {
    testView.createTipNumber.call(this, 0, false);
    expect(screen.getByTestId('test-tip-number-0')).toBeInTheDocument();
  });

  //   $(document).ready(() => {
  //     const runnerSize: number[] = [50, 50];
  //     testView.initializeValues(runnerSize);
  //     test('if function initLayers runs ', () => {
  //       expect(testView.runnerSize[0]).toBe(60);
  //     });
  //   });

  testView.initStartEnd(20, 60);
  test('if function initStartEnd append start-end to html', () => {
    expect($field.attr('data-start')).toBe('20');
    expect($field.attr('data-end')).toBe('60');
  });

  test('if function updateTipNumber update html content', () => {
    const updateTipTestArgs = { stepValue: 70, instance: 0 };
    testView.updateTipNumber.call(this, updateTipTestArgs);
    const element = screen.getByTestId('test-tip-number-0');
    expect(element).toHaveTextContent('70');
    expect($field.find('.js-instance-0 span').text()).toBe('70');
  });
  test('if function updateBarPosition update width of horizontal range slider', () => {
    testView.runnersPosition = [20, 80];
    testView.isRange = true;
    testView.updateBarPosition.call(this);
    expect($field.find('.js-slider-bar').css('width')).toBe('60%');
  });
  test('if function updateBarPosition update height of vertical slider', () => {
    testView.runnersPosition = [60, 100];
    testView.isRange = false;
    testView.isVertical = true;
    testView.updateBarPosition.call(this);
    expect($field.find('.js-slider-bar').css('height')).toBe('60%');
  });
});

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
    testView.notifySliderMoving.call(this, [0, 100]);
    expect(recieveDragData).toHaveBeenCalled();
  });
});

// describe('if function updateRunner update html attributes', () => {
//   const $field: JQuery<HTMLElement> = $('#testId');
//   const testPresenter = new SliderPresenter('testId', {});
//   const testView = new SliderView('testId', testPresenter);

//   test('must setThisRunnerPosition and change html-left to 50', () => {
//     testView.runnersPosition = [60, 100];
//     testView.isRange = false;
//     testView.isVertical = false;
//     testView.updateRunnerPosition.call(this, 50, 0);
//     expect(testView.runnersPosition[0]).toBe(50);
//     const element = screen.getByTestId('test-runner-0');
//     expect(element).toHaveStyle('left:50%');
//     // expect($field.find('.js-instance-0').css('left')).toBe('50%');
//   });
// });
