module.exports = {
  automock: false,
  bail: true,
  cacheDirectory: '<rootDir>/tools/jest/tmp/',
  clearMocks: false,
  collectCoverageFrom: [
    '**/*.js',
    '!**/mock-data/**',
    '!**/index.js',
    '!**/jest*',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  rootDir: '../../',
  roots: ['<rootDir>/src/components', '<rootDir>/src/utils'],
  setupTestFrameworkScriptFile: '<rootDir>/tools/jest/jest.framework-setup.js',
  testURL: 'http://some.url/',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // https://github.com/facebook/jest/issues/3285
  // https://github.com/facebook/create-react-app/issues/2537
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
};
