const path = require('path');

const { SRC_DIR, TITLE } = require('./constants');

module.exports = {
  assetsDir: 'assets',
  editorConfig: {
    theme: 'lucario',
  },
  pagePerSection: true,
  require: [path.join(SRC_DIR, 'styles/lodgify-ui.css')],
  sections: require('./options/sections'),
  serverPort: 6060,
  showUsage: true,
  skipComponentsWithoutExample: true,
  styleguideComponents: require('../styleguide-components'),
  styleguideDir: 'dist',
  styles: require('./options/styles'),
  template: require('./options/template'),
  theme: require('./options/theme'),
  title: TITLE,
  webpackConfig: require('../webpack.config.js'),
};
