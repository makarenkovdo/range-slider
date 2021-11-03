// /**
//  * @jest-environment jsdom
//  */
// // import { beforeEach, describe, expect } from 'jest';
// import '@testing-library/jest-dom';
// import { screen } from '@testing-library/dom';
// import SliderPresenter from '../../src/presenter/SliderPresenter';
// import SliderView from '../../src/view/SliderView';

// describe('createScale TDD-test', () => {
//   document.body.innerHTML = `
//     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
//     `;
//   const testPresenter = new SliderPresenter('testId', { isRange: true });
//   const testView = new SliderView('testId', testPresenter);
//   testView.createScale.call(this);

//   test('must return true', () => {
//     expect(screen.getByTestId('test-scale')).toBeInTheDocument();
//   });
// });
