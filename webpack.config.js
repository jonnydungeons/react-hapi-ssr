const path = require('path'),
  webpack = require('webpack'),
  nodeExternals = require('webpack-node-externals'),
  browserConfig = {
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
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
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.json($|\?)/,
          use: 'json-loader',
          type: 'javascript/auto'
        }
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
    externals: [nodeExternals()],
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
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.json($|\?)/,
          use: 'json-loader',
          type: 'javascript/auto'
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
