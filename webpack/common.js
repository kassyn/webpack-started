'use strict'

const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

const alias = {
  components: join(paths.src, 'components'),
  data: join(paths.src, 'data'),
  layout: join(paths.src, 'layout'),
  css: join(paths.src, 'css')
}

const config = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: 'bundle.js'
  },

  resolve: {
    alias
  },

  babel: {
    test: /(\.js|\.jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(paths.src, 'index.tmpl.html')
    })
  ]
}

module.exports = config
