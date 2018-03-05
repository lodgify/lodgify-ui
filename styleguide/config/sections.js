const path = require('path');

module.exports = srcDirectory => [
  {
    name: 'Get started',
    content: 'docs/getStarted.md',
  },
  {
    name: 'Typography',
    components: path.join(
      srcDirectory,
      'components/typography/**/component.js'
    ),
  },
  {
    name: 'Elements',
    components: path.join(srcDirectory, 'components/elements/**/component.js'),
  },
  {
    name: 'Collections',
    components: path.join(
      srcDirectory,
      'components/collections/**/component.js'
    ),
  },
];
