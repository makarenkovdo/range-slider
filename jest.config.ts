import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  setupFiles: ['./src/setup-jest.js'],
  modulePathIgnorePatterns: ["skip", 'Model','Presenter', 'ttd' ]
};
export default config;