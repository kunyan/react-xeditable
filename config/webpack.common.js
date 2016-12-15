const webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ]
  }
};
