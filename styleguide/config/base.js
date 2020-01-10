const path = require('path');

const { SRC_DIR, TITLE } = require('./constants');

module.exports = {
  getComponentPathLine: require('./options/componentPathLine'),
  moduleAliases: {
    '@lodgify/ui': path.resolve(__dirname, '..', '..', 'src'),
  },
  assetsDir: 'assets',
  theme: {
    color: {
      codeBackground: '#2b3e50',
    },
  },
  pagePerSection: true,
  require: [path.join(SRC_DIR, 'styles/semantic/lodgify-ui.less'), 'moment'],
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
