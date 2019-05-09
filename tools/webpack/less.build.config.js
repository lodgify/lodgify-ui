const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..', '..');
const SRC_STYLES_PATH = path.join(ROOT_PATH, 'src', 'styles');
const LIB_STYLES_PATH = path.join(ROOT_PATH, 'lib', 'styles');
const SRC_SEMANTIC_STYLES_PATH = path.join(
  ROOT_PATH,
  'src',
  'styles',
  'semantic'
);

module.exports = {
  entry: {
    accordian: path.join(SRC_SEMANTIC_STYLES_PATH, 'accordion.less'),
    button: path.join(SRC_SEMANTIC_STYLES_PATH, 'button.less'),
    card: path.join(SRC_SEMANTIC_STYLES_PATH, 'card.less'),
    checkbox: path.join(SRC_SEMANTIC_STYLES_PATH, 'checkbox.less'),
    container: path.join(SRC_SEMANTIC_STYLES_PATH, 'container.less'),
    dimmer: path.join(SRC_SEMANTIC_STYLES_PATH, 'dimmer.less'),
    divider: path.join(SRC_SEMANTIC_STYLES_PATH, 'divider.less'),
    dropdown: path.join(SRC_SEMANTIC_STYLES_PATH, 'dropdown.less'),
    flag: path.join(SRC_SEMANTIC_STYLES_PATH, 'flag.less'),
    form: path.join(SRC_SEMANTIC_STYLES_PATH, 'form.less'),
    grid: path.join(SRC_SEMANTIC_STYLES_PATH, 'grid.less'),
    header: path.join(SRC_SEMANTIC_STYLES_PATH, 'header.less'),
    icon: path.join(SRC_SEMANTIC_STYLES_PATH, 'icon.less'),
    image: path.join(SRC_SEMANTIC_STYLES_PATH, 'image.less'),
    input: path.join(SRC_SEMANTIC_STYLES_PATH, 'input.less'),
    item: path.join(SRC_SEMANTIC_STYLES_PATH, 'item.less'),
    label: path.join(SRC_SEMANTIC_STYLES_PATH, 'label.less'),
    list: path.join(SRC_SEMANTIC_STYLES_PATH, 'list.less'),
    'lodgify-ui': path.join(SRC_STYLES_PATH, 'lodgify-ui.less'),
    menu: path.join(SRC_SEMANTIC_STYLES_PATH, 'menu.less'),
    message: path.join(SRC_SEMANTIC_STYLES_PATH, 'message.less'),
    modal: path.join(SRC_SEMANTIC_STYLES_PATH, 'modal.less'),
    popup: path.join(SRC_SEMANTIC_STYLES_PATH, 'popup.less'),
    rating: path.join(SRC_SEMANTIC_STYLES_PATH, 'rating.less'),
    'react-dates-datepicker': path.join(
      SRC_SEMANTIC_STYLES_PATH,
      'react-dates-datepicker.less'
    ),
    'react-image-gallery': path.join(
      SRC_SEMANTIC_STYLES_PATH,
      'react-image-gallery.less'
    ),
    'react-player': path.join(SRC_SEMANTIC_STYLES_PATH, 'react-player.less'),
    segment: path.join(SRC_SEMANTIC_STYLES_PATH, 'segment.less'),
    statistic: path.join(SRC_SEMANTIC_STYLES_PATH, 'statistic.less'),
    table: path.join(SRC_SEMANTIC_STYLES_PATH, 'table.less'),
    transition: path.join(SRC_SEMANTIC_STYLES_PATH, 'transition.less'),
  },
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
