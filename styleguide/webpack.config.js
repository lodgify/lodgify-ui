const path = require('path');

const INCLUDE_PATHS = [__dirname, path.join(__dirname, '..', 'src')];

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
        test: /\.(eot|svg|ttf|woff|woff2|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'assets'),
  },
};
