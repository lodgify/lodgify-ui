const path = require('path');

const buildComponentsPath = (srcDirectory, category) =>
  path.join(srcDirectory, `components/${category}/**/component.js`);

module.exports = srcDirectory => [
  {
    name: 'Get started',
    content: 'docs/getStarted.md',
  },
  {
    name: 'Typography',
    components: buildComponentsPath(srcDirectory, 'typography'),
  },
  {
    name: 'Elements',
    components: buildComponentsPath(srcDirectory, 'elements'),
  },
  {
    name: 'Collections',
    components: buildComponentsPath(srcDirectory, 'collections'),
  },
  {
    name: 'Widgets',
    components: buildComponentsPath(srcDirectory, 'widgets'),
  },
];
