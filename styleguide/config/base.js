const path = require('path');

const SRC_DIR = path.join(__dirname, '..', '..', 'src');

const TITLE = 'Lodgify UI';

module.exports = {
  assetsDir: 'assets',
  editorConfig: {
    theme: 'material',
  },
  require: [path.join(SRC_DIR, 'semantic/dist/semantic.min.css')],
  sections: require('./sections')(SRC_DIR),
  skipComponentsWithoutExample: true,
  styleguideComponents: require('../styleguide-components'),
  styles: require('./styles'),
  template: {
    context: {
      title: TITLE,
    },
    filename: path.join('.', 'index.html'),
  },
  theme: require('./theme'),
  title: TITLE,
  webpackConfig: require('../webpack.config.js'),
  styleguideDir: 'dist',
  serverPort: 6060,
};
