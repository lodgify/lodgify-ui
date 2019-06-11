const path = require('path');

const { SRC_DIR, TITLE } = require('./constants');

module.exports = {
  getComponentPathLine: require('./options/componentPathLine'),
  assetsDir: 'assets',
  editorConfig: {
    theme: 'lucario',
  },
  pagePerSection: true,
  require: [path.join(SRC_DIR, 'styles/semantic/lodgify-ui.less')],
  sections: require('./options/sections'),
  serverPort: 6060,
  skipComponentsWithoutExample: true,
  styleguideComponents: require('../styleguide-components'),
  styleguideDir: 'dist',
  styles: require('./options/styles'),
  template: require('./options/template'),
  theme: require('./options/theme'),
  title: TITLE,
  usageMode: 'expand',
  webpackConfig: require('../webpack.config.js'),
};
