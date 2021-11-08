/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { getByTestId, screen, waitFor, getByText} from '@testing-library/dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';
import SliderView from '../../src/view/SliderView';
import createScale from '../../src/view/viewModules/createScale';




describe('SUPER TEST', () => {

document.body.innerHTML = `
<div style="width: 700px; margin-bottom: 100px;">
<div style="width: 500px;" data-testid="testId" id="testId" class="slider"></div>
</div>
`;
// const testView = new SliderView('testId', testPresenter);
// function ready() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('sdfsdf');
//       reject("done");  
//    },5000) 
//   });
// }

jest.setTimeout(10000);

test('movie title appears', async () => {
  // element is initially not present...
  const testPresenter = new SliderPresenter('testId', { isRange: true });
  testPresenter.view.createScale.call(this); 
  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(getByTestId('test-scale')).toBeInTheDocument()
  })
})

// test('some test title', async () => {
//   const testPresenter = new SliderPresenter('testId', { isRange: true });
//   testPresenter.view.createScale.call(this); 
//   await new Promise((r) => document.addEventListener('load',()=> true));
//   // await new Promise((r) => setTimeout(r, 3000));

//   expect(screen.getByTestId('testIdd')).toBeInTheDocument();
// });

// ready().then(()=>testIt()).then(()=>console.log('POLNOE UG'));

// function testIt() {
//   test('passes if the element has the specified class', ()=>{
//     expect(screen.getByTestId('testId')).toBeInTheDocument();
//   });
// }

//   const testPresenter = new SliderPresenter('testId', { isRange: true });
//   testPresenter.view.createScale.call(this)

//     it('SUPER TESTSUPER TEST', () => {
     
//       window.addEventListener('load', (event) => {
//         console.log(testPresenter.view.fieldSize);

// })
// expect(testPresenter.view.fieldSize[0]).toBe(600);

//     })
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
