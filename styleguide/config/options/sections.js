const path = require('path');

const { SRC_DIR } = require('../constants');

const buildComponentsPath = category =>
  path.join(SRC_DIR, `components/${category}/**/component.js`);

module.exports = [
  {
    name: 'Introduction',
    content: 'docs/introduction.md',
  },
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
    name: 'Inputs',
    components: buildComponentsPath('inputs'),
  },
  {
    name: 'Collections',
    components: buildComponentsPath('collections'),
  },
  {
    name: 'Media',
    components: buildComponentsPath('media'),
  },
  {
    name: 'General widgets',
    components: buildComponentsPath('general-widgets'),
  },
  {
    name: 'Property page widgets',
    components: buildComponentsPath('property-page-widgets'),
  },
];
