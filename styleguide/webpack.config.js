const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');

const JS_INCLUDE_PATHS = [
  __dirname,
  path.join(ROOT_PATH, 'lib'),
  path.join(ROOT_PATH, 'src/components'),
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: JS_INCLUDE_PATHS,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: path.join(ROOT_PATH, 'src/styles'),
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpeg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '../../theme.config$': path.join(
        ROOT_PATH,
        'src/styles/semantic/theme.config'
      ),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'assets'),
  },
};
