const { BABEL_ENV } = process.env;

const isProductionBuild = ['commonjs', 'es'].includes(BABEL_ENV);
const isESBuild = BABEL_ENV === 'es';

module.exports = () => ({
  comments: isProductionBuild ? false : undefined,
  presets: [
    [
      '@babel/env',
      {
        modules: isESBuild ? false : 'commonjs',
      },
    ],
    '@babel/react',
  ],
  plugins: [
    isProductionBuild && [
      'semantic-ui-react-transform-imports',
      {
        importType: isESBuild ? 'es' : 'commonjs',
      },
    ],
    isProductionBuild && [
      './tools/babel/plugin-react-dates-transform-imports',
      {
        importType: isESBuild ? 'es' : 'commonjs',
      },
    ],
    isProductionBuild && [
      'transform-rename-import',
      {
        replacements: [
          { original: '^(.+?)\\.less$', replacement: '../$1.css' },
          {
            original: '^(.+?)/semantic',
            replacement: '$1',
          },
        ],
      },
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    'lodash',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          collections: './src/components/collections',
          elements: './src/components/elements',
          'general-widgets': './src/components/general-widgets',
          inputs: './src/components/inputs',
          layout: './src/components/layout',
          media: './src/components/media',
          'property-page-widgets': './src/components/property-page-widgets',
          typography: './src/components/typography',
          'semantic-ui-styles': './src/styles/semantic',
          utils: './src/utils',
        },
      },
    ],
    [
      'transform-react-remove-prop-types',
      {
        mode: 'wrap',
      },
    ],
  ].filter(Boolean),
});
