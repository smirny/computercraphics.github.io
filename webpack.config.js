'use strict';

var node_dir = __dirname + '/node_modules';
var vendor_dir = __dirname + '/vendor';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

require('es6-promise').polyfill();

module.exports = {
  context: __dirname + '/src/js',
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // Skip any files outside of your project's `src` directory
        include: [
          __dirname + '/src/js',
        ],
        exclude: [
          __dirname + '/node_modules',
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      }, {
        test: /\.modernizrrc$/, loader: 'modernizr'
      }, {
        test: /\.css?$/,
        loaders: [ ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader'), 'raw' ],
        include: __dirname
      }, {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']),
        include: __dirname
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=src/fonts/[name].[ext]'
      },
    ],
  },

  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, '.modernizrrc'),
    },
    extensions: ['', '.js', '.jsx', '.js.jsx'],
    modulesDirectories: ['node_modules']
  },

  postcss: function () {
    return [autoprefixer({ browsers: ['last 5 versions', 'iOS >= 8', 'Safari >= 8'] })];
  }
}
