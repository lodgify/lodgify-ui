const util = require('util');

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// Configure enzyme
// http://airbnb.io/enzyme/
configure({ adapter: new Adapter() });

// Elevate console warnings to errors.
// https://gist.github.com/thurt/a7651202eef97d25bee1c12f81b796f7

/* global jasmine */
/* eslint-disable no-console */

// keep a reference to the original console methods
const consoleWarn = console.warn;
const consoleError = console.error;

const elevateLogToError = (...args) => {
  throw new Error(
    util.format.apply(this, args).replace(/^Error: (?:Warning: )?/, '')
  );
};

jasmine.getEnv().beforeEach(() => {
  // make calls to console.warn and console.error throw an error
  console.warn = elevateLogToError;
  console.error = elevateLogToError;
});

jasmine.getEnv().afterEach(() => {
  // return console.warn and console.error to default behaviour
  console.warn = consoleWarn;
  console.error = consoleError;
});
