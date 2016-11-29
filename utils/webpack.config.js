/**
 * @module
 * We will be splitting assets and src compilation so we can pinpoint there is the performance issues happening easily.
 */
var path = require('path');
var eq = require('lodash/eq');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../src/index.js'),
    path.join(__dirname, "../assets/sass/main.scss")
  ],
  output: {
      path: path.join(__dirname, '../dist'),
      filename: "bundle.js",
      publicPath: '../'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist)/,
        loaders: [ 'babel' ]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
         test: /\.(woff|woff2|ttf|svg|eot|png|jpg|gif)/, 
         loader: 'url-loader' 
      }
    ]
  },
  progress: true,
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}