import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  setupFiles: ['./src/setup-jest.js'],
  testPathIgnorePatterns: ['Presenter', 'Model', 'bar', 'field', 'runner', 'scale', 'tip', 'pureFunctions']
};
export default config;