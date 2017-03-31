var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var WWW_DIR = path.resolve(BUILD_DIR, 'public/js');
var CLIENT_DIR = path.resolve(__dirname, 'frontend/js');
var SERVER_DIR = path.resolve(__dirname, 'server');
var CSS_DIR = path.resolve(__dirname, 'frontend/sass');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
      })
  .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
      });

var server = {
    entry: SERVER_DIR + '/index.js',
    target: 'node',
    output: {
          path: BUILD_DIR,
          filename: 'backend.js'
    },
  externals: nodeModules,
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SERVER_DIR,
        loader : 'babel-loader'
      }
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();')//,
    //                                         { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap'
};

var client = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: CLIENT_DIR + '/client.jsx',
  },
  output: {
    path: WWW_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : CLIENT_DIR,
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

module.exports = client;
