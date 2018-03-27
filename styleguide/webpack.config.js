const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');

const INCLUDE_PATHS = [
  __dirname,
  path.join(ROOT_PATH, 'src'),
  path.join(ROOT_PATH, 'node_modules/react-dates/lib/css'),
  path.join(ROOT_PATH, 'node_modules/react-image-gallery/styles/css'),
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: INCLUDE_PATHS,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: INCLUDE_PATHS,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpeg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'assets'),
  },
};
