'use strict';

let path = require('path');
// let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
// let BowerWebpackPlugin = require('bower-webpack-plugin');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = Object.assign({}, baseConfig, {
  entry: [
    // 'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    // 'webpack/hot/only-dev-server',
    './src/index'

  ],
  cache: true,
  // cache: false,

  // devtool: 'eval-source-map',
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new BowerWebpackPlugin({
    //   searchResolveModulesDirectories: false
    // }),

    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   },
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //       NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    //   },
    // }),

    //这里设置的路径是打包生成文件的生成路径
    new ExtractTextPlugin("./app.css")


  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  // loader: 'react-hot!babel-loader',
  loader: 'babel-loader',

  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
