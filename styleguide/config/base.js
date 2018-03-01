const path = require('path');

const SRC_DIR = path.join(__dirname, '..', '..', 'src');

module.exports = {
  assetsDir: 'assets',
  editorConfig: {
    theme: 'material',
  },
  require: [path.join(SRC_DIR, 'semantic/dist/semantic.min.css')],
  sections: [
    {
      name: 'Get started',
      content: 'docs/getStarted.md',
    },
    {
      name: 'Typography',
      components: path.join(SRC_DIR, 'components/typography/**/component.js'),
    },
    {
      name: 'Elements',
      components: path.join(SRC_DIR, 'components/elements/**/component.js'),
    },
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: require('../styleguide-components'),
  styles: require('./styles'),
  template: path.join('.', 'index.html'),
  theme: require('./theme'),
  title: 'Lodgify UI',
  webpackConfig: require('../webpack.config.js'),
  styleguideDir: 'dist',
  serverPort: 6060,
};
