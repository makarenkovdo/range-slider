/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../presenter/SliderPresenter';
import { CreateRangeSliderArgsType } from '../presenter/presenterInterfaces';

beforeEach(() => {
  document.body.innerHTML = `
    <div data-testid="first" id="first" class="range-runner horizontal" data-start="0"></div>
    `;
});

describe('runnerController test', () => {
  const firstRunner = new SliderPresenter('first', {
    isTestMode: true,
  });
  test('constructor testing', () => {
    expect(firstRunner).toHaveProperty('runnerCounter', 0);
    expect(firstRunner).toHaveProperty('field.isVertical', false);
    expect(firstRunner).toHaveProperty('runners');
    expect(firstRunner).toHaveProperty('view');
    expect(firstRunner).not.toHaveProperty('runners[1]');
  });

  firstRunner.setMinMax(14, 19);
  test('if function "setMinMax" assign values to field/view keys', () => {
    expect(firstRunner.field.minMax[0]).toBe(14);
    expect(firstRunner.field.minMax[1]).toBe(19);
    expect(firstRunner.view.minMax[0]).toBe(14);
    expect(firstRunner.view.minMax[1]).toBe(19);
  });

  const runnerSize: number[] = [50, 50];
  firstRunner.view.initializeValues(runnerSize);
  $(document).ready(() => {
    test('if function initLayers runs ', () => {
      expect(firstRunner.view.runnerSize[0]).toBe(50);
    });
  });

  const createRangeSliderTestArgs: CreateRangeSliderArgsType = {
    isRange: false,
    shouldAddTip: false,
    runnerSize: [70, 70],
    minValue: 10,
    maxValue: 100,
  };

  test('if createRangeSlider runs', () => {
    firstRunner.createRangeSlider(createRangeSliderTestArgs);
    expect(firstRunner.view.isRange).toBe(false);
  });

  describe('creating slider and setStep', () => {
    test('if createRangeSlider runs if/else block', () => {
      createRangeSliderTestArgs.isRange = true;
      firstRunner.createRangeSlider(createRangeSliderTestArgs);
      expect(firstRunner.view.isRange).toBe(true);
    });
    test('if setStep', () => {
      createRangeSliderTestArgs.isRange = true;
      firstRunner.setStep(1991);
      expect(firstRunner.runners[0].step).toBe(1991);
    });
  });

  test('if createBar runs', () => {
    expect(firstRunner.view.hasBar).toBe(false);
    firstRunner.createBar(true);
    expect(firstRunner.view.hasBar).toBe(true);
  });

  // test('if function "createRunner" creating html-element', () => {
  //   const firstRunner = new SliderPresenter('first', {
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
//   expect(firstRunner.field.minValue).toBe(14);
// });
// test('if function "setMaxValue" set', () => {
//   expect(firstRunner.field.maxValue).toBe(19);
// });
// expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
