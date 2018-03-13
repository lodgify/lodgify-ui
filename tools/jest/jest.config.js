module.exports = {
  automock: false,
  clearMocks: false,
  verbose: false,
  bail: true,
  rootDir: '../../',
  cacheDirectory: '<rootDir>/tools/jest/tmp/',
  collectCoverageFrom: [
    '**/*.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/tools/**',
    '!**/(styleguide|semantic)/**',
    '!**/mock-data/**',
    '!**/*+(config.js)',
    '!**/index.js',
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
  setupTestFrameworkScriptFile: '<rootDir>/tools/jest/jest.framework-setup.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // https://github.com/facebook/jest/issues/3285
  // https://github.com/facebook/create-react-app/issues/2537
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
