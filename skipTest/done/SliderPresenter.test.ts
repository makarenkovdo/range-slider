/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';
import { CreateRangeSliderArgsType } from '../../src/presenter/presenterInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('runnerPresenter test', () => {
  const $field: JQuery<HTMLElement> = $('#first');
  const testedSlider = new SliderPresenter('first', {
    isTestMode: true,
  });
  test('constructor testing', () => {
    expect(testedSlider).toHaveProperty('runnerCounter', 0);
    expect(testedSlider).toHaveProperty('field.isVertical', false);
    expect(testedSlider).toHaveProperty('runners');
    expect(testedSlider).toHaveProperty('view');
    expect(testedSlider).not.toHaveProperty('runners[1]');
  });

  testedSlider.setMinMax(14, 19);
  test('if function "setMinMax" assign values to field/view keys', () => {
    expect(testedSlider.field.minMax[0]).toBe(14);
    expect(testedSlider.field.minMax[1]).toBe(19);
    expect(testedSlider.view.minMax[0]).toBe(14);
    expect(testedSlider.view.minMax[1]).toBe(19);
  });

  const runnerSize: number[] = [50, 50];
  testedSlider.view.initializeValues(runnerSize);
  $(document).ready(() => {
    test('if function initLayers runs ', () => {
      expect(testedSlider.view.runnerSize[0]).toBe(50);
    });
  });

  const createRangeSliderTestArgs: CreateRangeSliderArgsType = {
    isRange: false,
    shouldAddTip: true,
    runnerSize: [70, 70],
    minValue: 10,
    maxValue: 100,
  };

  test('if createRangeSlider runs', () => {
    testedSlider.createRangeSlider(createRangeSliderTestArgs);
    expect(testedSlider.view.isRange).toBe(false);
  });

  describe('creating slider', () => {
    test('if createRangeSlider runs if/else block', () => {
      createRangeSliderTestArgs.isRange = true;
      testedSlider.createRangeSlider(createRangeSliderTestArgs);
      expect(testedSlider.view.isRange).toBe(true);
    });

    test('if createRangeSlider calls functions', () => {
      const createRunnerView = jest.fn();
      const createRunner = jest.fn();
      const createTipNumber = jest.fn();
      const onDrag = jest.fn();
      const onDrop = jest.fn();
      testedSlider.createRunnerView = createRunnerView;
      testedSlider.createRunner = createRunner;
      testedSlider.createTipNumber = createTipNumber;
      testedSlider.onDrag = onDrag;
      testedSlider.onDrop = onDrop;
      testedSlider.createRangeSlider(createRangeSliderTestArgs);
      expect(createRunnerView).toHaveBeenCalled();
      expect(createRunner).toHaveBeenCalled();
      expect(createTipNumber).toHaveBeenCalled();
      expect(onDrag).toHaveBeenCalled();
      expect(onDrop).toHaveBeenCalled();
    });
  });

  test('if createBar runs', () => {
    expect(testedSlider.view.hasBar).toBe(false);
    testedSlider.createBar(true);
    expect(testedSlider.view.hasBar).toBe(true);
  });

  test('if updateTipNumber runs', () => {
    $(document).ready(() => {
      testedSlider.updateTipNumber(70, 0);
      const textContent: string = $field.find('.js-instance-0 span').text();
      expect(textContent).toBe(70);
    });
  });
  test('if setStep set runner.step', () => {
    testedSlider.setStep(1991);
    expect(testedSlider.runners[0].step).toBe(1991);
  });

  // test('if function "createRunner" creating html-element', () => {
  //   const testedSlider = new SliderPresenter('first', {
  //     shouldAddTip: true,
  //     shouldAddBar: true,
  //     step: 0.1,
  //     maxValue: 17,
  //     isRange: true,
  //   });
  //   // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
  //   expect(screen.getByTestId('test-runner-0')).toBeInTheDocument();
  //   expect(screen.getByTestId('test-runner-1')).toBeInTheDocument();
  // });
});

// test('if function "setMinvalue" set', () => {
//   expect(testedSlider.field.minValue).toBe(14);
// });
// test('if function "setMaxValue" set', () => {
//   expect(testedSlider.field.maxValue).toBe(19);
// });
// expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
