
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
  './index.js' // Your appʼs entry point
  ],
  output: {
    path: path.normalize(__dirname + '/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname
      }
    ]
  },
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};