const path = require('path');

const { SRC_DIR } = require('../constants');

const buildComponentsPath = category =>
  path.join(SRC_DIR, `components/${category}/**/component.js`);

module.exports = [
  {
    name: 'Get started',
    content: 'docs/getStarted.md',
  },
  {
    name: 'Typography',
    components: buildComponentsPath('typography'),
  },
  {
    name: 'Layout',
    components: buildComponentsPath('layout'),
  },
  {
    name: 'Elements',
    components: buildComponentsPath('elements'),
  },
  {
    name: 'Collections',
    components: buildComponentsPath('collections'),
  },
  {
    name: 'Widgets',
    components: buildComponentsPath('widgets'),
  },
];
