// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    setupFiles: ['./src/setup-jest.js'],
  };
};
// testEnvironment: 'node';
// global.document = require('jsdom').jsdom('<html></html>');
// global.window = document.defaultView;
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

//destructure window object from JSDOM
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
