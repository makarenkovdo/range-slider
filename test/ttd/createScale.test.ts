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
 
 jest.setTimeout(10000);
 
 test('movie title appears', async () => {
   // element is initially not present...
   const testPresenter = new SliderPresenter('testId', { isRange: true });
  //  testPresenter.view.createScale.call(this); 
  
  createScale.call(testPresenter.view)
   // wait for appearance inside an assertion
   await waitFor(() => {
     expect(screen.getByTestId('test-scale')).toBeInTheDocument()
   })
 })
 
 
 
 });
 