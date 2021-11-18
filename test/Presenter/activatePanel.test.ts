/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom';
 import SliderPresenter from '../../src/presenter/SliderPresenter';
 import { CreateRangeSliderArgsType } from '../../src/presenter/presenterInterfaces';
 
 beforeEach(() => {
   document.body.innerHTML = `
   <section id="first-panel" class="panel">
   <div class="panel__tools">
     <div class="panel__inputs">
       <div class="panel__min-value"><label">MIN VALUE</label><input type="number" class="js-slider-input__min-value"></div>
       <div class="panel__max-value"><label">MAX VALUE</label><input type="number" class="js-slider-input__max-value"></div>
       <div class="panel__runner-0-value"><label">RUNNER-1 VALUE</label><input type="number" class="js-slider-input__runner-0-value"></div>
       <div class="panel__runner-1-value"><label">RUNNER-2 VALUE</label><input type="number" class="js-slider-input__runner-1-value"></div>
       <div class="panel__runner-width"><label">RUNNER WIDTH</label><input min="6" max="50" type="number" class="js-slider-input__runner-width"></div>
       <div class="panel__runner-height"><label">RUNNER HEIGHT</label><input type="number" class="js-slider-input__runner-height"></div>
       <div class="panel__step"><label">STEP</label><input type="number" class="js-slider-input__step"></div>
       <div class="panel__field-thickness"><label">FIELD THICKNESS</label><input type="number" class="js-slider-input__field-thickness"></div>
     </div>
     <div class="panel__checkboxes">
       <div class="panel__is-range"><label>IS RANGE</label><input type="checkbox" class="js-slider-input__is-range"></div>
       <div class="panel__orientation"><label>IS VERTICAL</label><input type="checkbox" class="js-slider-input__orientation"></div>
       <div class="panel__scale"><label>HAS SCALE</label><input type="checkbox" class="js-slider-input__has-scale"></div>
       <div class="panel__bar"><label>HAS BAR</label><input type="checkbox" class="js-slider-input__has-bar"></div>
       <div class="panel__tip"><label>HAS TIP</label><input type="checkbox" class="js-slider-input__has-tip"></div>
     </div>
     </div>  
 <div style="width: 500px; height: 500px; margin-bottom: 100px;">
   <div id="first" class="slider"></div>
 </div>
 </section>    `;
 });
 
 describe('runnerPresenter test', () => {
   const $field: JQuery<HTMLElement> = $('#first');
   let testedSlider = new SliderPresenter('first', {
     isTestMode: true,
   });
 
 
   // const runnerSize: number[] = [50, 50];
   // testedSlider.view.initializeValues(runnerSize);
   // $(document).ready(() => {
   //   test('if function initLayers runs ', () => {
   //     expect(testedSlider.view.runnerSize[0]).toBe(50);
   //   });
   // });
 
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
 });
 