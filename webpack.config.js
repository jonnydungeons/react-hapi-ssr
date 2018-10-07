const path = require('path'),
  webpack = require('webpack'),
  browserConfig = {
    target: 'web',
    mode: 'production',
    entry: ['./src/browser/index.js'],
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
        },
        { test: /\.(json)$/, loader: 'json' }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "true",
        'process.env': {
          __isBrowser__: true
        }
      })
    ]
  },
  serverConfig = {
    target: 'node',
    mode: 'production',
    entry: ['@babel/polyfill', './src/server/index.js'],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false",
        'process.env': {
          __isBrowser__: false
        }
      })
    ]
  }

module.exports = [browserConfig, serverConfig]
