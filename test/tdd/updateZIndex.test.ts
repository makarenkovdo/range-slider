// /**
//  * @jest-environment jsdom
//  */
// // import { beforeEach, describe, expect } from 'jest';
// import '@testing-library/jest-dom';
// import { screen } from '@testing-library/dom';
// import SliderView from '../src/view/SliderView';
// import SliderPresenter from '../src/presenter/SliderPresenter';

// describe('if function "setThis" set this.$runners', () => {
//   document.body.innerHTML = `
//       <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"><div class=".js-runner"></div></div>
//       `;
//   const testPresenter = new SliderPresenter('testId', {
//     isRange: true,
//   });

//   const testView = new SliderView('testId', testPresenter);
//   test('must set z-index of active runner to 10, and of passive to 2', () => {
//     // testView.updateRunnerPosition.call(this, 50, 0);
//     testView.updateZIndex.call(this, 0);
//     expect(testView.runnersPosition[0]).toBe(50);
//     const element0 = screen.getByTestId('test-runner-0');
//     const element1 = screen.getByTestId('test-runner-1');
//     expect(element0).toHaveStyle('z-index:0');
//     expect(element1).toHaveStyle('z-index:1');
//   });
// });
