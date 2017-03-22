var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/public/js');
var APP_DIR = path.resolve(__dirname, 'frontend/js');

var config = {
  entry: APP_DIR + '/client.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'client.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
