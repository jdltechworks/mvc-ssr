import config from '../../utils/webpack.config.js';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(config);

module.exports = {
  devMiddleware: webpackMiddleware(compiler,
  {
    contentBase: '../../src',
    publicPath: '../../dist',
    hot:        true,
    inline:     false,
    lazy:       false,
    quiet:      false,
    noInfo:     false,
    headers:    { "Access-Control-Allow-Origin": "*" },
    stats:      { colors: true }
  }),
  hotMiddleware: webpackHotMiddleware(compiler)
};