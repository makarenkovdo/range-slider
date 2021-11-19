/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { PresenterBuildParams } from '../../../src/presenter/presenterInterfaces';
import checkValues from '../../../src/presenter/presenterModules/checkValues';

describe('check build params test', () => {
  const params:PresenterBuildParams = {
    shouldAddTip: true,
    shouldAddBar: true,
    step: 2,
    maxValue: -0.1,
    minValue: 0.1,
    isRange: true,
    shouldAddScale: true,
    runnerSize: [12, 12],
    runnersInstantPosition: [9, 14],
    hasInputPanel: true,
    orientation: 'vertical',
  };

  test('checkValues must return correct value ', () => {
    const newParams = checkValues(params);
    expect(newParams.runnersInstantPosition[0]).toBe(-0.1);
    expect(newParams.minValue).toBe(-0.1);
    expect(newParams.runnersInstantPosition[1]).toBe(0.1);
    expect(newParams.maxValue).toBe(0.1);
    expect(newParams.step).toBe(0.2);
  });
  test('checkValues must return value from empty object', () => {
    const newParams = checkValues({});
    expect(newParams.minValue).toBe(0);
    expect(newParams.maxValue).toBe(100);
    expect(newParams.orientation).toBe('horizontal');
  });
  test('checkValues must return falsy boolean from empty object', () => {
    const newParams = checkValues({});
    expect(newParams.hasInputPanel).toBe(false);
    expect(newParams.shouldAddBar).toBe(false);
    expect(newParams.shouldAddScale).toBe(false);
    expect(newParams.shouldAddTip).toBe(false);
  });
  test('checkValues must return correct sizes if it too big', () => {
    params.runnerSize = [100, 100];
    params.fieldThickness = 100;
    const newParams = checkValues(params);
    expect(newParams.runnerSize[0]).toBe(50);
    expect(newParams.runnerSize[1]).toBe(50);
    expect(newParams.fieldThickness).toBe(20);
  });
  test('checkValues must return correct sizes if it too small', () => {
    params.runnerSize = [-1, 0];
    params.fieldThickness = 0;
    const newParams = checkValues(params);
    expect(newParams.runnerSize[0]).toBe(6);
    expect(newParams.runnerSize[1]).toBe(6);
    expect(newParams.fieldThickness).toBe(1);
  });
  test('checkValues must return correct step if it too small', () => {
    params.step = -10;
    params.minValue = 0;
    params.maxValue = 100;

    const newParams = checkValues(params);
    expect(newParams.step).toBe(1);
  });
  test('checkValues must return correct minMax if it equal', () => {
    params.minValue = 0;
    params.maxValue = 0;

    const newParams = checkValues(params);
    expect(newParams.minValue).toBe(0);
    expect(newParams.maxValue).toBe(100);
  });
});
