const path = require('path');

const { SRC_DIR, TITLE } = require('./constants');

module.exports = {
  assetsDir: 'assets',
  editorConfig: {
    theme: 'material',
  },
  require: [path.join(SRC_DIR, 'semantic/dist/semantic.min.css')],
  sections: require('./options/sections'),
  skipComponentsWithoutExample: true,
  styleguideComponents: require('../styleguide-components'),
  styles: require('./options/styles'),
  template: require('./options/template'),
  theme: require('./options/theme'),
  title: TITLE,
  webpackConfig: require('../webpack.config.js'),
  styleguideDir: 'dist',
  serverPort: 6060,
};
