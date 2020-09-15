const path = require('path');

const SRC_DIR = path.join(__dirname, '/src/');
const DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  mode: 'development',
  watch: true,
  entry: `${SRC_DIR}index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
