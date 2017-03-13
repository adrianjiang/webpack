/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

var ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader','css-loader',{
      //     //此处路径对应于css文件中引用图片的路径
      //     publicPath: '../assets/'
      //   })
      // },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
        // loader: ExtractTextPlugin.extract('style-loader','css-loader','less-loader',{
        //   //此处路径对应于css文件中引用图片的路径
        //   publicPath: '../assets/'
        // })
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=1000'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: "html?config=otherHtmlLoaderConfig"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // {{#sass}}
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            // 'less': 'vue-style-loader!css-loader!less-loader'
            'less': ExtractTextPlugin.extract('vue-style-loader','css-loader','less-loader',{
              //此处路径对应于css文件中引用图片的路径
              publicPath: '../assets/'
            })
            // {{/sass}}
          }
          // other vue-loader options go here
        }
      },
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: 'assets/',
  // publicPath: '/assets/',

  port: dfltPort,
  getDefaultModules: getDefaultModules
};
