const path = require('path');

const { kebabCase } = require('lodash');

const { SRC_DIR } = require('../constants');

const buildComponentsPath = category =>
  path.join(SRC_DIR, `components/${category}/**/component.js`);

const getComponentsSectionConfig = name => ({
  name,
  components: buildComponentsPath(kebabCase(name)),
  sectionDepth: 1,
});

module.exports = [
  {
    name: 'Introduction',
    content: 'docs/introduction.md',
  },
  {
    name: 'Get started',
    content: 'docs/getStarted.md',
  },
  getComponentsSectionConfig('Typography'),
  getComponentsSectionConfig('Layout'),
  getComponentsSectionConfig('Elements'),
  getComponentsSectionConfig('Inputs'),
  getComponentsSectionConfig('Collections'),
  getComponentsSectionConfig('Media'),
  getComponentsSectionConfig('General widgets'),
  getComponentsSectionConfig('Property page widgets'),
];
