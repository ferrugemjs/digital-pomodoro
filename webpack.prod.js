const merge = require('webpack-merge');
const dev = require('./webpack.dev.js');

dev.module.rules[3].loaders[1].options.env = 'production';
module.exports = merge(dev, {
  mode: 'production',
  devtool: 'source-map',
});