'use strict'

const common = require('./common')

console.log(common.cssLoader)

module.exports = {
  entry: common.entry,

  output: common.output,

  module: {
    rules: [
      common.babel,
      common.cssLoader
    ]
  },

  resolve: common.resolve,

  plugins: common.plugins.concat([]),

  devServer: {
    contentBase: common.dist,
    historyApiFallback: true,
    compress: true,
    host: 'localhost',
    port: 3000
  }
}
