const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    bundle: './client',
    lamda: './lamda'
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
