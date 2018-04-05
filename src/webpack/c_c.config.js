var webpack = require('webpack');
const config = require('./../../webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require('es6-promise').polyfill();

config.entry = ['babel-polyfill', './index.js'];
config.entry = ['whatwg-fetch', './index.js']

config.output = {
  filename: 'c_c.js',
  path: './build',
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    new ExtractTextPlugin('c_c.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
} else {
  config.plugins = [
    new ExtractTextPlugin('c_c.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
}

module.exports = config;
