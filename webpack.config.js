var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/public/js');
var APP_DIR = path.resolve(__dirname, 'frontend/js');
var CSS_DIR = path.resolve(__dirname, 'frontend/sass');

var config = {
  devtool: 'cheap-eval-source-map',
  entry: APP_DIR + '/client.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ],
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader", // compiles Sass to CSS
        options: {
          includePaths: [CSS_DIR],
          sourceMap: true
        }
      }]
    }, {
      test: /\.jsx?/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  }
};

module.exports = config;
