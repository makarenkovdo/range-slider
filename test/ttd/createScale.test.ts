/**
 * @jest-environment jsdom
 */
// import { beforeEach, describe, expect } from 'jest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';
import SliderView from '../../src/view/SliderView';
import createScale from '../../src/view/viewModules/createScale';

beforeEach(() => {
    document.body.innerHTML = `
      <div style="width: 500px; margin-bottom: 100px;">
      <div data-testid="testId" id="testId" class="slider" data-start="0"></div>
      </div>
    `;
    // const testView = new SliderView('testId', testPresenter);
    const testPresenter = new SliderPresenter('testId', { isRange: true });
    testPresenter.view.createScale.call(this)

    document.addEventListener("DOMContentLoaded", () => {    document.body.innerHTML = `
    <div>hahahaahah</div>
  `;
})

  });

describe('createScale TDD-test', () => {
    it('работает с промисами', () => {
     
    document.addEventListener("DOMContentLoaded", () => {    document.body.innerHTML = `
    <div data-testid='ug' class='ug'>hahahaahah</div>
  `;});
  expect(screen.getByTestId('ug')).toBeInTheDocument();

})
//   document.body.innerHTML = `
//     <div data-testid="testId" id="testId" class="range-runner horizontal" data-start="0"></div>
// //     `;

// function ready() {
//     return new Promise((resolve) => {
//     window.onload = resolve
//     })
//   }

// ready().then(newUG()).then(testIT()).then(console.log('POLNOE UG'));
// function testIT() {
//   test('must return true', () => {
//     expect(screen.getByTestId('test-slider__scale-lines')).toBeInTheDocument();
// })
// }
// function newUG() {
//     console.log('????????');
    
// document.body.innerHTML = `
//         <div>hahahaahah</div>
//       `;

// }

});
