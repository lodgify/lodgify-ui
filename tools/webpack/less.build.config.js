const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..', '..');
const LIB_STYLES_PATH = path.join(ROOT_PATH, 'lib', 'styles');

const entries = require('./entries');

module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpeg)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    // For now we need to output (and delete) this orphan js file.
    // Webpack has support for CSS-only modules on the way.
    // https://github.com/webpack/webpack/pull/6448
    // When this is released we can kill the orphan 🔪
    filename: '[name]-orphan.js',
    path: LIB_STYLES_PATH,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    alias: {
      '../../theme.config$': path.join(
        ROOT_PATH,
        'src/styles/semantic/theme.config'
      ),
    },
  },
};
