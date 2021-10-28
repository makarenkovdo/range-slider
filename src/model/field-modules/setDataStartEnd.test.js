/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import jQuery from 'jquery';
// if you want to use $ as an alias
const $ = jQuery;
import SliderController from '../../controller/slider-controller';

// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(`<!DOCTYPE html>`);

beforeEach(() => {
  document.body.innerHTML = `
   <div data-testid="first" id="first" class="range-slider horizontal" data-start="0"></div>
   `;
  const firstSlider = new SliderController('first', {
    shouldAddTip: true,
    shouldAddBar: true,
    step: 0.1,
    maxValue: 17,
    isRange: true,
  });
});

describe('test-zone', () => {
  test('uses jest-dom', () => {
    // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    expect(screen.getByTestId('first')).toBeInTheDocument();
  });
});
