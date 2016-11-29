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
var blessPlugin = require('bless-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '/src/index.js'),
    path.join(__dirname, '/assets/sass/main.scss')
  ],
  output: {
      path: path.join(__dirname, '/dist/'),
      filename: "./js/[hash].js",
      publicPath: '/'
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
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        ),
        loaders: ['style?sourceMap', 'css', 'sass']
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)/,
        loader: 'file-loader?name=fonts/[name]/[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif)/,
        loader: 'file-loader?name=img/[name].[ext]'
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('./css/[hash].css'),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: false })
  ]
}