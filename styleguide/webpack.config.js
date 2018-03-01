const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: ROOT_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: ROOT_DIR,
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
