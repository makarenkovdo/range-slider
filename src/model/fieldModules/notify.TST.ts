// import RunnerController from '../../controller/SliderPresenter';
// import RunnerModel from '../RunnerModel';
// import notify from '../runner-modules/notify';

// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// //destructure window object from JSDOM
// const { window } = new JSDOM(
//   `<!DOCTYPE html><html><head>
// </head><body></body></html>`,
//   {
//     contentType: 'text/html',
//     includeNodeLocations: true,
//     resources: 'usable',
//     storageQuota: 10000000,
//     runScripts: 'dangerously',
//   },
// );

// const $ = require('jquery')(window);

// global.window = window;
// global.document = window.document;

// global.jQuery = $;
// global.$ = $;
// beforeEach(() => {
//   const firstRunner = new RunnerController('first', {
//     shouldAddTip: true,
//     shouldAddBar: true,
//     step: 0.1,
//     maxValue: 17,
//     isRange: true,
//   });
//   firstRunner.runner[0].notify();
// });
// describe('SOME TEST', () => {
//   test('sfsdf', () => {
//     expect(notify).toHaveBeenCalled();
//   });
// });
