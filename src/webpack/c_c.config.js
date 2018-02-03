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

config.plugins = [
  new ExtractTextPlugin('c_c.css', {
    allChunks: true
  }),
]

module.exports = config;
